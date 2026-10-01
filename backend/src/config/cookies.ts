import type { CookieOptions, Response } from 'express';
import { env } from './env.js';

export const ACCESS_TOKEN_COOKIE = 'access_token';
export const REFRESH_TOKEN_COOKIE = 'refresh_token';

const baseCookieOptions = (): CookieOptions => ({
  httpOnly: true,
  secure: env.isProduction,
  sameSite: env.isProduction ? 'strict' : 'lax',
});

export const accessTokenCookieOptions = (): CookieOptions => ({
  ...baseCookieOptions(),
  maxAge: env.jwt.accessMaxAgeMs,
  path: '/',
});

export const refreshTokenCookieOptions = (): CookieOptions => ({
  ...baseCookieOptions(),
  maxAge: env.jwt.refreshMaxAgeMs,
  path: '/api/v1/auth',
});

export const setAuthCookies = (
  res: Response,
  accessToken: string,
  refreshToken: string
): void => {
  res.cookie(ACCESS_TOKEN_COOKIE, accessToken, accessTokenCookieOptions());
  res.cookie(REFRESH_TOKEN_COOKIE, refreshToken, refreshTokenCookieOptions());
};

export const clearAuthCookies = (res: Response): void => {
  res.clearCookie(ACCESS_TOKEN_COOKIE, accessTokenCookieOptions());
  res.clearCookie(REFRESH_TOKEN_COOKIE, refreshTokenCookieOptions());
};
