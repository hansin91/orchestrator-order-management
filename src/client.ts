import { Transport, ClientOptions } from '@nestjs/microservices'
const host = process.env.HOST
const port = Number(process.env.PORT)
const NATS_USERNAME = process.env.NATS_USERNAME
const NATS_PASSWORD= process.env.NATS_PASSWORD

export const clientOptions: ClientOptions = {
  transport: Transport.TCP,
  options: {
    host,
    port,
  },
}

export const natsClient: ClientOptions = {
  transport: Transport.NATS,
  options: {
    servers: ['nats://localhost:4222'],
    user: NATS_USERNAME,
    pass: NATS_PASSWORD
  }
}

export const natsQueueClient = (queue: string) => {
  const client = {...natsClient} as ClientOptions
  client.options = {...client.options, queue, verbose: true}
  return client
}
