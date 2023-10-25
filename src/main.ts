import './env';
import { NestFactory } from '@nestjs/core';
import * as helmet from 'helmet';
import * as compressionn from 'compression';
import { urlencoded, json } from 'express';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './middlewares/errorHandler';
import { readFileSync } from 'fs';

async function bootstrap() {
  const environment = process.env.NODE_ENV
  let app;
  if (environment === 'development') {
    app = await NestFactory.create(AppModule);
  } else {
    const httpsOptions = {
      key: readFileSync('./secret/privkey.pem'),
      cert: readFileSync('./secret/cert.pem'),
    };
    app = await NestFactory.create(AppModule, {httpsOptions});
  }
  app.useGlobalFilters(new AllExceptionsFilter());
  app.enableCors();
  app.use(helmet());
  app.use(compressionn());
  app.use(json({ limit: '50mb' }));
  app.use(urlencoded({ extended: true, limit: '50mb' }));
  await app.listen(3000);
}
bootstrap();
