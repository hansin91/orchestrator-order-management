import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { clientOptions } from './client';
import { AuthService, CategoryService, GroupService } from '@services';
import { AuthController, CategoryController, GroupController } from '@controllers';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'AUTH_SERVICE',
        ...clientOptions,
      },
    ]),
    ClientsModule.register([
      {
        name: 'CATEGORY_SERVICE',
        ...clientOptions,
      },
    ]),
    ClientsModule.register([
      {
        name: 'GROUP_SERVICE',
        ...clientOptions,
      },
    ]),
  ],
  providers: [AuthService, CategoryService, GroupService],
  controllers: [AuthController, CategoryController, GroupController],
})
export class AppModule {}
