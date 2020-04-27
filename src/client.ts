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