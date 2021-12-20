const PORT = Number(process.env.REDIS_PORT)
const HOST = process.env.REDIS_HOST
const PASSWORD = process.env.REDIS_PASSWORD

export const Queue = {
  redis: {
    host: HOST,
    port: PORT,
    password: PASSWORD 
  }
}