const PORT = Number(process.env.REDIS_PORT)
const HOST = process.env.REDIS_HOST
const PASSWORD = process.env.REDIS_PASSWORD

export const Queue = {
  redis: {
    host: HOST,
    port: PORT,
    password: PASSWORD 
  },
  settings: {
    lockDuration: 30000,
    lockRenewTime: 15000, 
    stalledInterval: 30000,
    maxStalledCount: 1,
    guardInterval: 5000, 
    retryProcessDelay: 5000,
    backoffStrategies: {},
    drainDelay: 5 
  }
}