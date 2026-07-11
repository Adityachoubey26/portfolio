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

export const env = {
  NODE_ENV: getEnv('NODE_ENV', 'development'),
  PORT: Number(getEnv('PORT', '5000')),
  MONGODB_URI: process.env.MONGODB_URI?.trim() ?? '',
  CLIENT_URL: getEnv('CLIENT_URL', 'http://localhost:5173'),
  LOG_LEVEL: getEnv('LOG_LEVEL', 'info'),
  isProduction: getEnv('NODE_ENV', 'development') === 'production',
};
