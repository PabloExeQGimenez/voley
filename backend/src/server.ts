import { app } from './app.js';
import { ENV } from './utils/env.js';
import { logger } from './utils/logger.js';
import { prisma } from './db/prisma.js';

app.listen(ENV.PORT, async () => {
  await prisma.$queryRaw`SELECT_1`;
  logger.info(`API running on http://localhost:${ENV.PORT}`);
});
