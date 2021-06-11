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
  UploadedOrderService,
  UploadedFileService,
  OrderDetailService,
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
  UploadedOrderController,
  UploadedFileController,
} from '@controllers';
import { IsAuthenticated } from './middlewares/isAuthenticated';
import { rabbitMQOrderDetailOptions, rabbitMQOptions, rabbitMQUploadedOrderOptions } from './rabbitMQ';

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
        name: 'SHOPEE_SERVICE',
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
        name: 'QUEUE_SERVICE',
        ...rabbitMQOptions,
      },
    ]),
    ClientsModule.register([
      {
        name: 'UPLOADED_ORDER_SERVICE',
        ...rabbitMQUploadedOrderOptions,
      },
    ]),
    ClientsModule.register([
      {
        name: 'ORDER_DETAIL_SERVICE',
        ...rabbitMQOrderDetailOptions,
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
    UploadedOrderService,
    StoreService,
    LocationService,
    PriceService,
    PageService,
    UploadedFileService,
    OrderDetailService,
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
    LocationController,
    PageController,
    UploadedFileController,
    UploadedOrderController],
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
      PriceController,
      UploadedOrderController,
      UploadedFileController,
      OrderController);
  }
}
