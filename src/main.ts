import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from 'helmet';
import * as compressionn from 'compression';
import { AllExceptionsFilter } from './middlewares/errorHandler';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new AllExceptionsFilter());
  app.enableCors();
  app.use(helmet());
  app.use(compressionn());
  await app.listen(3000);
}
bootstrap();
