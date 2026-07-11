import { Router, type Request, type Response } from 'express';

export const healthCheckHandler = (_req: Request, res: Response): void => {
  res.status(200).json({
    success: true,
    status: 'ok',
    message: 'Portfolio Backend is running',
    environment: process.env.NODE_ENV,
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
};

const router = Router();

router.get('/', healthCheckHandler);

export default router;