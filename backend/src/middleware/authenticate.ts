import type { NextFunction, Request, Response } from 'express';
import { verifyAccessToken } from '../config/jwt.js';
import { AppError } from './errorHandler.js';
import { extractAccessToken, getAuthenticatedAdmin } from '../modules/auth/auth.service.js';

export const authenticate =
  () => async (req: Request, _res: Response, next: NextFunction): Promise<void> => {
    try {
      const token = extractAccessToken(req);

      if (!token) {
        throw new AppError('Authentication required', 401);
      }

      const payload = verifyAccessToken(token);
      req.user = await getAuthenticatedAdmin(payload.sub);
      next();
    } catch (error) {
      next(error);
    }
  };
