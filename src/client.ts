import { Transport, ClientOptions } from '@nestjs/microservices';
const host = process.env.HOST;
const port = Number(process.env.PORT);

export const clientOptions: ClientOptions = {
  transport: Transport.TCP,
  options: {
    host,
    port,
  },
};

export const natsClient: ClientOptions = {
  transport: Transport.NATS,
  options: {
    servers: ['nats://localhost:4222'],
    user: 'admin_nats',
    pass: 'superpassword'
  }
}