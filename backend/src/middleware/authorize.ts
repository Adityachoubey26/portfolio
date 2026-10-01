import type { NextFunction, Request, Response } from 'express';
import type { AdminRole } from '../modules/auth/auth.types.js';
import { AppError } from './errorHandler.js';

export const authorize =
  (...roles: AdminRole[]) =>
  (req: Request, _res: Response, next: NextFunction): void => {
    if (!req.user) {
      next(new AppError('Authentication required', 401));
      return;
    }

    if (!roles.includes(req.user.role)) {
      next(new AppError('Insufficient permissions', 403));
      return;
    }

    next();
  };
