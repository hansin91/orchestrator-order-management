import './env';
import { NestFactory } from '@nestjs/core';
import * as helmet from 'helmet';
import * as compressionn from 'compression';
import { urlencoded, json } from 'express';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './middlewares/errorHandler';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new AllExceptionsFilter());
  app.enableCors();
  app.use(helmet());
  app.use(compressionn());
  app.use(json({ limit: '50mb' }));
  app.use(urlencoded({ extended: true, limit: '50mb' }));
  await app.listen(3000);
}
bootstrap();
