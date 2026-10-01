import crypto from 'crypto';
import bcrypt from 'bcryptjs';
import type { Request } from 'express';
import { env, getAdminConfig } from '../../config/env.js';
import {
  ACCESS_TOKEN_COOKIE,
  REFRESH_TOKEN_COOKIE,
  clearAuthCookies,
  setAuthCookies,
} from '../../config/cookies.js';
import { signAccessToken, signRefreshToken, verifyRefreshToken } from '../../config/jwt.js';
import { AppError } from '../../middleware/errorHandler.js';
import { logger } from '../../config/logger.js';
import { AdminModel, RefreshTokenModel } from './auth.model.js';
import type { AuthSessionResponse, AuthUser } from './auth.types.js';
import type { ChangePasswordInput, LoginInput } from './auth.validator.js';

const BCRYPT_ROUNDS = 12;

const hashToken = (token: string): string =>
  crypto.createHash('sha256').update(token).digest('hex');

const toAuthUser = (admin: { _id: { toString(): string }; email: string; role: 'admin' }): AuthUser => ({
  id: admin._id.toString(),
  email: admin.email,
  role: admin.role,
});

const createSession = async (adminId: string, email: string, role: 'admin') => {
  const tokenId = crypto.randomUUID();
  const refreshToken = signRefreshToken({ sub: adminId, jti: tokenId });
  const accessToken = signAccessToken({ sub: adminId, email, role });

  const expiresAt = new Date(Date.now() + env.jwt.refreshMaxAgeMs);

  await RefreshTokenModel.create({
    adminId,
    tokenId,
    tokenHash: hashToken(refreshToken),
    expiresAt,
  });

  return { accessToken, refreshToken };
};

const revokeRefreshToken = async (tokenId: string): Promise<void> => {
  await RefreshTokenModel.deleteOne({ tokenId });
};

const revokeAllRefreshTokens = async (adminId: string): Promise<void> => {
  await RefreshTokenModel.deleteMany({ adminId });
};

const getRefreshTokenFromRequest = (req: Request): string | undefined =>
  req.cookies?.[REFRESH_TOKEN_COOKIE] as string | undefined;

const validateStoredRefreshToken = async (refreshToken: string) => {
  const payload = verifyRefreshToken(refreshToken);
  const storedToken = await RefreshTokenModel.findOne({ tokenId: payload.jti });

  if (!storedToken || storedToken.tokenHash !== hashToken(refreshToken)) {
    throw new AppError('Invalid refresh token', 401);
  }

  if (storedToken.expiresAt.getTime() <= Date.now()) {
    await revokeRefreshToken(payload.jti);
    throw new AppError('Refresh token expired', 401);
  }

  const admin = await AdminModel.findById(payload.sub);

  if (!admin || !admin.isActive) {
    await revokeRefreshToken(payload.jti);
    throw new AppError('Admin account is inactive or not found', 401);
  }

  return { admin, payload };
};

export const ensureDefaultAdmin = async (): Promise<void> => {
  const existingAdminCount = await AdminModel.countDocuments();

  if (existingAdminCount > 0) {
    logger.info('Admin already exists. Skipping seed.');
    return;
  }

  const { email, password } = getAdminConfig();

  if (!password) {
    logger.warn('No admin account found and ADMIN_PASSWORD is not set. Skipping admin seed.');
    return;
  }

  const passwordHash = await bcrypt.hash(password, BCRYPT_ROUNDS);

  await AdminModel.create({
    email: email.toLowerCase(),
    passwordHash,
    role: 'admin',
    isActive: true,
  });

  logger.info('Default admin account created');
};

export const login = async (
  input: LoginInput
): Promise<{ session: AuthSessionResponse; accessToken: string; refreshToken: string }> => {
  const admin = await AdminModel.findOne({ email: input.email.toLowerCase() }).select('+passwordHash');

  if (!admin || !admin.isActive) {
    throw new AppError('Invalid email or password', 401);
  }

  const isPasswordValid = await bcrypt.compare(input.password, admin.passwordHash);

  if (!isPasswordValid) {
    throw new AppError('Invalid email or password', 401);
  }

  admin.lastLoginAt = new Date();
  await admin.save();

  const { accessToken, refreshToken } = await createSession(
    admin._id.toString(),
    admin.email,
    admin.role
  );

  return {
    session: { user: toAuthUser(admin) },
    accessToken,
    refreshToken,
  };
};

export const logout = async (req: Request): Promise<void> => {
  const refreshToken = getRefreshTokenFromRequest(req);

  if (refreshToken) {
    try {
      const payload = verifyRefreshToken(refreshToken);
      await revokeRefreshToken(payload.jti);
    } catch {
      // Ignore invalid refresh tokens during logout.
    }
  }
};

export const refreshSession = async (
  req: Request
): Promise<{ session: AuthSessionResponse; accessToken: string; refreshToken: string }> => {
  const refreshToken = getRefreshTokenFromRequest(req);

  if (!refreshToken) {
    throw new AppError('Refresh token not found', 401);
  }

  const { admin, payload } = await validateStoredRefreshToken(refreshToken);

  await revokeRefreshToken(payload.jti);

  const tokens = await createSession(admin._id.toString(), admin.email, admin.role);

  return {
    session: { user: toAuthUser(admin) },
    ...tokens,
  };
};

export const changePassword = async (
  adminId: string,
  input: ChangePasswordInput
): Promise<void> => {
  const admin = await AdminModel.findById(adminId).select('+passwordHash');

  if (!admin || !admin.isActive) {
    throw new AppError('Admin account is inactive or not found', 401);
  }

  const isCurrentPasswordValid = await bcrypt.compare(input.currentPassword, admin.passwordHash);

  if (!isCurrentPasswordValid) {
    throw new AppError('Current password is incorrect', 400);
  }

  if (input.currentPassword === input.newPassword) {
    throw new AppError('New password must be different from the current password', 400);
  }

  admin.passwordHash = await bcrypt.hash(input.newPassword, BCRYPT_ROUNDS);
  await admin.save();

  await revokeAllRefreshTokens(adminId);
};

export const getAuthenticatedAdmin = async (adminId: string): Promise<AuthUser> => {
  const admin = await AdminModel.findById(adminId);

  if (!admin || !admin.isActive) {
    throw new AppError('Admin account is inactive or not found', 401);
  }

  return toAuthUser(admin);
};

export const issueAuthCookies = (
  res: Parameters<typeof setAuthCookies>[0],
  accessToken: string,
  refreshToken: string
): void => {
  setAuthCookies(res, accessToken, refreshToken);
};

export const clearSessionCookies = (res: Parameters<typeof clearAuthCookies>[0]): void => {
  clearAuthCookies(res);
};

export const extractAccessToken = (req: Request): string | undefined => {
  const cookieToken = req.cookies?.[ACCESS_TOKEN_COOKIE] as string | undefined;

  if (cookieToken) {
    return cookieToken;
  }

  const authHeader = req.headers.authorization;

  if (authHeader?.startsWith('Bearer ')) {
    return authHeader.slice(7).trim();
  }

  return undefined;
};
