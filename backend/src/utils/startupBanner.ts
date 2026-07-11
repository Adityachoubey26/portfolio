import chalk from 'chalk';
import mongoose from 'mongoose';
import { env } from '../config/env.js';
import { API_PREFIX } from '../constants/index.js';

const SEPARATOR_WIDTH = 63;

interface StartupBannerOptions {
  startupTimeMs: number;
}

const separator = (): string => chalk.gray('═'.repeat(SEPARATOR_WIDTH));

const formatLine = (label: string, value: string, isSuccess: boolean): string => {
  const icon = isSuccess ? chalk.green('✓') : chalk.yellow('⚠');
  const coloredValue = isSuccess ? chalk.green(value) : chalk.yellow(value);

  return `  ${icon} ${chalk.white(label.padEnd(24))} ${coloredValue}`;
};

const getMongoStatus = (): { label: string; isSuccess: boolean } => {
  if (mongoose.connection.readyState === 1) {
    return { label: 'Connected', isSuccess: true };
  }

  if (!env.MONGODB_URI) {
    return { label: 'Not configured (skipped)', isSuccess: false };
  }

  return { label: 'Disconnected', isSuccess: false };
};

export const printStartupBanner = ({ startupTimeMs }: StartupBannerOptions): void => {
  const baseUrl = `http://localhost:${env.PORT}`;
  const mongoStatus = getMongoStatus();

  const lines = [
    '',
    separator(),
    chalk.bold.cyan('  Portfolio Backend API'),
    separator(),
    formatLine('MongoDB Connection', mongoStatus.label, mongoStatus.isSuccess),
    formatLine('Server URL', baseUrl, true),
    formatLine('Health Endpoint', `${baseUrl}/api/health`, true),
    formatLine('API Base URL', `${baseUrl}${API_PREFIX}`, true),
    formatLine('Environment', env.NODE_ENV, true),
    formatLine('Port', String(env.PORT), true),
    formatLine('Startup Time', `${startupTimeMs}ms`, true),
    separator(),
    '',
  ];

  console.log(lines.join('\n'));
};
