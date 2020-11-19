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
  ProductService,
  StoreService,
  LocationService,
  PriceService,
  ProductQueueService,
  StockService,
  UploadedFileService,
} from '@services';
import {
  AuthController,
  CategoryController,
  GroupController,
  OrderController,
  StatusController,
  ShippingController,
  PageController,
  ProductController,
  StoreController,
  RoomController,
  RackController,
  WarehouseController,
  LocationController,
  PriceController,
  StockController,
} from '@controllers';
import { IsAuthenticated } from './middlewares/isAuthenticated';
import { rabbitMQOptions, rabbitMQProductOptions } from './rabbitMQ';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'UPLOADED_FILE_SERVICE',
        ...clientOptions,
      },
    ]),
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
        name: 'STORE_SERVICE',
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
        name: 'PRODUCT_SERVICE',
        ...clientOptions,
      },
    ]),
    ClientsModule.register([
      {
        name: 'LOCATION_SERVICE',
        ...clientOptions,
      },
    ]),
    ClientsModule.register([
      {
        name: 'PRICE_SERVICE',
        ...clientOptions,
      },
    ]),
    ClientsModule.register([
      {
        name: 'STOCK_SERVICE',
        ...clientOptions,
      },
    ]),
    ClientsModule.register([
      {
        name: 'QUEUE_SERVICE',
        ...rabbitMQOptions,
      },
    ]),
    ClientsModule.register([
      {
        name: 'PRODUCT_QUEUE_SERVICE',
        ...rabbitMQProductOptions,
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
    ProductService,
    ProductQueueService,
    StoreService,
    LocationService,
    PriceService,
    StockService,
    PageService,
    UploadedFileService,
  ],
  controllers: [
    AuthController,
    CategoryController,
    GroupController,
    OrderController,
    ShippingController,
    StatusController,
    StoreController,
    ProductController,
    WarehouseController,
    RoomController,
    RackController,
    PriceController,
    StockController,
    LocationController,
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
      StoreController,
      ProductController,
      WarehouseController,
      RoomController,
      RackController,
      LocationController,
      StockController,
      PriceController,
      OrderController);
  }
}
