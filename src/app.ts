import { config } from './utils/config';
import { createServer } from './utils/createServer';
import { connectToDb, disconnectFromDb } from './utils/db';
import log from './utils/logger';

const signals = ['SIGINT', 'SIGTERM', 'SIGHUP'] as const;

async function gracefulShutdown({
  signal,
  server,
}: {
  signal: (typeof signals)[number];
  server: Awaited<ReturnType<typeof createServer>>;
}) {
  log.info(`Received ${signal}, shutting down gracefully`);

  await server.close();
  console.log('Server closed, hit');
  await disconnectFromDb();
  console.log('DB closed, hit');

  process.exit(1);
}

async function startServer() {
  const server = await createServer();

  server.listen({
    port: config.PORT,
    host: config.HOST,
  });

  await connectToDb();

  log.info(`Server is listening on port ${config.PORT}`);

  for (const signal of signals) {
    process.on(signal, async () => {
      await gracefulShutdown({ signal, server });
    });
  }
}

startServer();
