import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { BullModule  } from '@nestjs/bull'
import { clientOptions } from './client';
import {
  AuthService,
  CategoryService,
  GroupService,
  OrderService,
  StatusService,
  ShippingService,
  PageService,
  ProductService,
  StoreService,
  LocationService,
  PriceService,
  UploadedFileService,
  ReportService,
  TokenService
} from '@services';
import { UploadProducerService, FileProducerService, OrderProducerService, ReportProducerService } from '@producers'
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
  ReportController
} from '@controllers'
import { IsAuthenticated } from './middlewares/isAuthenticated'
import { Queue } from './queue'
import { RouterModule } from 'nest-router'
import { routes } from './routes'
import { CheckerModule } from './mobile/order-checker/checker.module'
import { ShopeeController } from './controllers/shopee.controller';

@Module({
  imports: [
    RouterModule.forRoutes(routes),
    CheckerModule,
    BullModule.forRoot({
      ...Queue
    }),
    BullModule.registerQueue(
      {name: 'file-queue'},
      {name: 'upload-queue'},
      {name: 'order-queue'},
      {name: 'report-queue'}
    ),
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
        name: 'REPORT_SERVICE',
        ...clientOptions
      }
    ])
  ],
  providers: [
    AuthService,
    CategoryService,
    GroupService,
    OrderService,
    ShippingService,
    StatusService,
    ProductService,
    StoreService,
    LocationService,
    PriceService,
    PageService,
    UploadedFileService,
    ReportService,
    TokenService,
    FileProducerService,
    OrderProducerService,
    UploadProducerService,
    ReportProducerService
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
    UploadedOrderController,
    ShopeeController,
    ReportController],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(IsAuthenticated)
    .exclude(
      { path: 'auth/login', method: RequestMethod.POST },
      { path: 'auth/gLogin', method: RequestMethod.POST },
      { path: 'shopee/webhook', method: RequestMethod.POST },
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
      ShopeeController,
      OrderController);
  }
}
