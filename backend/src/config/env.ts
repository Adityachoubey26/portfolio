import './loadEnv.js';
import { parseDurationToMs } from '../utils/duration.js';

const getEnv = (key: string, fallback?: string): string => {
  const value = process.env[key] ?? fallback;
  if (value === undefined) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
};

const getJwtSecret = (key: string, devFallback: string): string => {
  const value = process.env[key]?.trim();
  if (value) {
    return value;
  }

  if ((process.env.NODE_ENV ?? 'development') === 'production') {
    throw new Error(`Missing required environment variable: ${key}`);
  }

  return devFallback;
};

export const getAdminConfig = (): { email: string; password: string } => ({
  email: getEnv('ADMIN_EMAIL', 'admin@portfolio.local').trim().toLowerCase(),
  password: process.env.ADMIN_PASSWORD?.trim() ?? '',
});

const nodeEnv = getEnv('NODE_ENV', 'development');
const accessExpiresIn = getEnv('JWT_ACCESS_EXPIRES_IN', '15m');
const refreshExpiresIn = getEnv('JWT_REFRESH_EXPIRES_IN', '7d');

export const env = {
  NODE_ENV: nodeEnv,
  PORT: Number(getEnv('PORT', '5000')),
  MONGODB_URI: process.env.MONGODB_URI?.trim() ?? '',
  CLIENT_URL: getEnv('CLIENT_URL', 'http://localhost:5173'),
  LOG_LEVEL: getEnv('LOG_LEVEL', nodeEnv === 'production' ? 'info' : 'http'),
  isProduction: nodeEnv === 'production',
  jwt: {
    accessSecret: getJwtSecret('JWT_ACCESS_SECRET', 'dev-access-secret-change-me'),
    refreshSecret: getJwtSecret('JWT_REFRESH_SECRET', 'dev-refresh-secret-change-me'),
    accessExpiresIn,
    refreshExpiresIn,
    accessMaxAgeMs: parseDurationToMs(accessExpiresIn),
    refreshMaxAgeMs: parseDurationToMs(refreshExpiresIn),
  },
  get admin() {
    return getAdminConfig();
  },
};
