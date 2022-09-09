import dotenv from 'dotenv';

dotenv.config();

function parseIgnoredApps() {
  const value = process.env.REGISTRY_IGNORED_APPS;
  if (!value || value.trim().length === 0) {
    return [];
  }
  return value.trim().split(',');
}

const config = {
  server: {
    host: process.env.HOST || '0.0.0.0',
    port: parseInt(process.env.PORT, 10) || 3000,
  },
  registry: {
    type: process.env.REGISTRY_TYPE || 'in-memory', // ['in-memory', 'redis']
    ignoredApps: parseIgnoredApps(),
  },
  scalingo: {
    apiToken: process.env.SCALINGO_API_TOKEN || 'tk-us-xxx',
    operationTimeout: parseInt(process.env.SCALINGO_OPERATION_TIMEOUT, 10) || 30,
  },
  startAndStop: {
    checkingIntervalCron: process.env.START_AND_STOP_CHECKING_INTERVAL_CRON || '* * * * *',
    maxIdleTime: parseInt(process.env.START_AND_STOP_MAX_IDLE_TIME, 10) || 51,
  }
}

console.log('\n\n\n');
console.log(config);
console.log('\n\n\n');

export default config;
