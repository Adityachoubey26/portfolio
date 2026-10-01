import jwt, { type SignOptions } from 'jsonwebtoken';
import { env } from './env.js';
import { AppError } from '../middleware/errorHandler.js';
import type { AdminRole } from '../modules/auth/auth.types.js';

export interface AccessTokenPayload {
  sub: string;
  email: string;
  role: AdminRole;
  type: 'access';
}

export interface RefreshTokenPayload {
  sub: string;
  jti: string;
  type: 'refresh';
}

const assertTokenType = <T extends { type: string }>(
  payload: jwt.JwtPayload,
  expectedType: T['type']
): T => {
  if (payload.type !== expectedType) {
    throw new AppError('Invalid token type', 401);
  }

  return payload as T;
};

export const signAccessToken = (payload: Omit<AccessTokenPayload, 'type'>): string =>
  jwt.sign({ ...payload, type: 'access' }, env.jwt.accessSecret, {
    expiresIn: env.jwt.accessExpiresIn,
  } as SignOptions);

export const signRefreshToken = (payload: Omit<RefreshTokenPayload, 'type'>): string =>
  jwt.sign({ ...payload, type: 'refresh' }, env.jwt.refreshSecret, {
    expiresIn: env.jwt.refreshExpiresIn,
  } as SignOptions);

export const verifyAccessToken = (token: string): AccessTokenPayload => {
  try {
    const payload = jwt.verify(token, env.jwt.accessSecret) as jwt.JwtPayload;
    return assertTokenType<AccessTokenPayload>(payload, 'access');
  } catch {
    throw new AppError('Invalid or expired access token', 401);
  }
};

export const verifyRefreshToken = (token: string): RefreshTokenPayload => {
  try {
    const payload = jwt.verify(token, env.jwt.refreshSecret) as jwt.JwtPayload;
    return assertTokenType<RefreshTokenPayload>(payload, 'refresh');
  } catch {
    throw new AppError('Invalid or expired refresh token', 401);
  }
};
