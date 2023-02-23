import mongoose from 'mongoose';
import { config } from './config';
import log from './logger';

export async function connectToDb() {
  try {
    await mongoose.connect(config.DATABASE_URL);
    log.info('Connected to database');
  } catch (err) {
    log.error({ err }, 'Failed to connect to database');
    process.exit(1);
  }
}

export function disconnectFromDb() {
  return mongoose.connection.close();
}
