import type { Request, Response } from 'express';
import { asyncHandler } from '../../utils/asyncHandler.js';
import { sendSuccess } from '../../utils/apiResponse.js';
import {
  changePassword,
  clearSessionCookies,
  getAuthenticatedAdmin,
  issueAuthCookies,
  login,
  logout,
  refreshSession,
} from './auth.service.js';

export const loginHandler = asyncHandler(async (req: Request, res: Response) => {
  const { session, accessToken, refreshToken } = await login(req.body);
  issueAuthCookies(res, accessToken, refreshToken);
  sendSuccess(res, session, 'Login successful');
});

export const logoutHandler = asyncHandler(async (req: Request, res: Response) => {
  await logout(req);
  clearSessionCookies(res);
  sendSuccess(res, null, 'Logout successful');
});

export const refreshHandler = asyncHandler(async (req: Request, res: Response) => {
  const { session, accessToken, refreshToken } = await refreshSession(req);
  issueAuthCookies(res, accessToken, refreshToken);
  sendSuccess(res, session, 'Session refreshed successfully');
});

export const changePasswordHandler = asyncHandler(async (req: Request, res: Response) => {
  await changePassword(req.user!.id, req.body);
  clearSessionCookies(res);
  sendSuccess(res, null, 'Password changed successfully. Please log in again.');
});

export const meHandler = asyncHandler(async (req: Request, res: Response) => {
  const user = await getAuthenticatedAdmin(req.user!.id);
  sendSuccess(res, { user }, 'Authenticated admin fetched successfully');
});
