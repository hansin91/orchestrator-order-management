import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { clientOptions } from './client';
import { AuthService, CategoryService, GroupService } from '@services';
import { AuthController, CategoryController, GroupController } from '@controllers';
import { IsAuthenticated } from './middlewares/isAuthenticated';

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
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(IsAuthenticated)
    .exclude(
      { path: 'auth/login', method: RequestMethod.POST },
      { path: 'auth/gLogin', method: RequestMethod.POST },
    )
    .forRoutes(GroupController, AuthController, CategoryController);
  }
}
