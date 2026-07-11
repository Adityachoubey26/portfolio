import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const getEnv = (key: string, fallback?: string): string => {
  const value = process.env[key] ?? fallback;
  if (value === undefined) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
};

const nodeEnv = getEnv('NODE_ENV', 'development');

export const env = {
  NODE_ENV: nodeEnv,
  PORT: Number(getEnv('PORT', '5000')),
  MONGODB_URI: process.env.MONGODB_URI?.trim() ?? '',
  CLIENT_URL: getEnv('CLIENT_URL', 'http://localhost:5173'),
  LOG_LEVEL: getEnv('LOG_LEVEL', nodeEnv === 'production' ? 'info' : 'http'),
  isProduction: nodeEnv === 'production',
};
