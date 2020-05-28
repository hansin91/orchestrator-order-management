import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { clientOptions } from './client';
import {
  AuthService,
  CategoryService,
  GroupService,
  OrderService,
  StatusService,
  ShippingService,
  QueueService,
  PageService,
} from '@services';
import {
  AuthController,
  CategoryController,
  GroupController,
  OrderController,
  StatusController,
  ShippingController,
  PageController,
} from '@controllers';
import { IsAuthenticated } from './middlewares/isAuthenticated';
import { rabbitMQOptions } from './rabbitMQ';

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
    ClientsModule.register([
      {
        name: 'ORDER_SERVICE',
        ...clientOptions,
      },
    ]),
    ClientsModule.register([
      {
        name: 'STATUS_SERVICE',
        ...clientOptions,
      },
    ]),
    ClientsModule.register([
      {
        name: 'SHIPPING_SERVICE',
        ...clientOptions,
      },
    ]),
    ClientsModule.register([
      {
        name: 'PAGE_SERVICE',
        ...clientOptions,
      },
    ]),
    ClientsModule.register([
      {
        name: 'QUEUE_SERVICE',
        ...rabbitMQOptions,
      },
    ]),
  ],
  providers: [
    AuthService,
    CategoryService,
    GroupService,
    OrderService,
    ShippingService,
    QueueService,
    StatusService,
    PageService],
  controllers: [
    AuthController,
    CategoryController,
    GroupController,
    OrderController,
    ShippingController,
    StatusController,
    PageController],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(IsAuthenticated)
    .exclude(
      { path: 'auth/login', method: RequestMethod.POST },
      { path: 'auth/gLogin', method: RequestMethod.POST },
    )
    .forRoutes(
      GroupController,
      AuthController,
      CategoryController,
      StatusController,
      ShippingController,
      PageController,
      OrderController);
  }
}
