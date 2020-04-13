import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions } from '@nestjs/microservices';
import { grpcClientOptions } from './grpc-client.options';
import * as dotenv from 'dotenv';
import * as helmet from 'helmet';
import * as csurf from 'csurf';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  dotenv.config();
  app.enableCors();
  app.use(helmet());
  app.connectMicroservice<MicroserviceOptions>(grpcClientOptions);
  // app.use(csurf({ cookie: true }));
  await app.startAllMicroservicesAsync();
  await app.listen(3000);
}
bootstrap();
