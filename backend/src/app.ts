import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import corsMiddleware from './config/cors.js';
import { env } from './config/env.js';
import { logger } from './config/logger.js';
import routes from './routes/index.js';
import { healthCheckHandler } from './routes/v1/health.routes.js';
import { notFound } from './middleware/notFound.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();

app.set('trust proxy', 1);

app.use(helmet());
app.use(corsMiddleware);
app.use(compression());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  morgan(env.isProduction ? 'combined' : 'dev', {
    stream: {
      write: (message: string) => logger.http(message.trim()),
    },
  })
);

app.get('/health', healthCheckHandler);

app.get('/', (_req, res) => {
  res.status(200).json({
    success: true,
    message: 'Portfolio API',
    version: '1.0.0',
  });
});

app.use(routes);

app.use(notFound);
app.use(errorHandler);

export default app;
