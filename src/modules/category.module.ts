import { Module, HttpModule } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { clientOptions } from '../client';
import { CategoryService } from '@services';
import { CategoryController } from 'src/controllers/category.controller';

@Module({
  imports: [
    HttpModule,
    ClientsModule.register([
      {
        name: 'CATEGORY_SERVICE',
        ...clientOptions,
      },
    ]),
  ],
  providers: [CategoryService],
  controllers: [CategoryController],
})
export class CategoryModule {}