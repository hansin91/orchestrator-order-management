import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import * as helmet from 'helmet';
import * as csurf from 'csurf';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  dotenv.config();
  app.use(helmet());
  app.use(csurf());
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
