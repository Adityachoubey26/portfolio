import type { NextFunction, Request, Response } from 'express';
import { logger } from '../config/logger.js';

export class AppError extends Error {
  statusCode: number;

  constructor(message: string, statusCode = 500) {
    super(message);
    this.statusCode = statusCode;
    this.name = 'AppError';
  }
}

export const errorHandler = (
  err: AppError,
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  const statusCode = err.statusCode ?? 500;
  const message = err.message || 'Internal Server Error';

  if (statusCode >= 500) {
    logger.error(message, { stack: err.stack });
  } else {
    logger.warn(message);
  }

  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
};
