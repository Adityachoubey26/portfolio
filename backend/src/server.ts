import './config/loadEnv.js';
import app from './app.js';
import { connectDB } from './config/db.js';
import { env } from './config/env.js';
import { logger } from './config/logger.js';
import { ensureDefaultAdmin } from './modules/auth/index.js';
import { printStartupBanner } from './utils/startupBanner.js';

const startServer = async (): Promise<void> => {
  const startupStartedAt = Date.now();

  await connectDB();
  await ensureDefaultAdmin();

  app.listen(env.PORT, () => {
    printStartupBanner({ startupTimeMs: Date.now() - startupStartedAt });
    logger.info(`Server running on port ${env.PORT} in ${env.NODE_ENV} mode`);
  });
};

startServer().catch((error) => {
  logger.error('Failed to start server', { error });
  process.exit(1);
});
