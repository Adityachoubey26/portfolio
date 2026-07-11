import type { Response } from 'express';
import type { PaginationMeta } from '../types/common.js';

export const sendSuccess = <T>(
  res: Response,
  data: T,
  message = 'Success',
  statusCode = 200
): void => {
  res.status(statusCode).json({
    success: true,
    statusCode,
    message,
    data,
  });
};

export const sendPaginated = <T>(
  res: Response,
  data: T[],
  pagination: PaginationMeta,
  message = 'Success'
): void => {
  res.status(200).json({
    success: true,
    statusCode: 200,
    message,
    data,
    pagination,
  });
};

export const sendCreated = <T>(res: Response, data: T, message = 'Created successfully'): void => {
  sendSuccess(res, data, message, 201);
};

export const sendNoContent = (res: Response): void => {
  res.status(204).send();
};
