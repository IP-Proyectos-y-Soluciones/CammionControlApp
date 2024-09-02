import Redis from 'ioredis';
import dotenv from 'dotenv';

dotenv.config();

const redis = new Redis({
    host: process.env.REDISHOST, // Se cambia esto si estás usando un servicio de Redis en la nube...
    port: process.env.REDIS_PORT, // Puerto por defecto de Redis...
    // password: process.env.REDIS_PASSWORD,
});

redis.on('error', (err) => {
    console.error('Redis connection error...!');
});

export default redis;
