import type { NextFunction, Request, Response } from 'express';
import type { ZodSchema } from 'zod';

type RequestSource = 'body' | 'query' | 'params';

export const validate =
  (schema: ZodSchema, source: RequestSource = 'body') =>
  (req: Request, res: Response, next: NextFunction): void => {
    const result = schema.safeParse(req[source]);

    if (!result.success) {
      res.status(400).json({
        success: false,
        statusCode: 400,
        message: 'Validation failed',
        errors: result.error.flatten(),
      });
      return;
    }

    if (source === 'body') {
      req.body = result.data;
    } else if (source === 'query') {
      req.query = result.data as Request['query'];
    } else {
      req.params = result.data as Request['params'];
    }

    next();
  };
