import { Redis } from 'ioredis';

if (!process.env.REDIS_URL) {
  throw new Error('Please add your Redis URL to .env.local');
}

const redis = new Redis(process.env.REDIS_URL);

export default redis; 