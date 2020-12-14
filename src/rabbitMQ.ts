import { Transport, ClientOptions } from '@nestjs/microservices';
const PORT = Number(process.env.RABBITMQ_PORT);
const HOST = process.env.RABBITMQ_HOST;
const USERNAME =  process.env.RABBITMQ_USER;
const PASSWORD = process.env.RABBITMQ_PASSWORD;
export const rabbitMQOptions: ClientOptions = {
  transport: Transport.RMQ,
  options: {
    urls: ['amqp://' + USERNAME + ':' + PASSWORD + '@' + HOST + ':' + PORT],
    queue: process.env.RABBITMQ_QUEUE,
    queueOptions: {
      durable: false,
    },
  },
};

export const rabbitMQUploadedOrderOptions: ClientOptions = {
  transport: Transport.RMQ,
  options: {
    urls: ['amqp://' + USERNAME + ':' + PASSWORD + '@' + HOST + ':' + PORT],
    queue: process.env.RABBITMQ_UPLOADED_ORDER_QUEUE,
    queueOptions: {
      durable: false,
    },
  },
};