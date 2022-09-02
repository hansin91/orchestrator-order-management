import { Module } from '@nestjs/common'
import { ClientsModule } from '@nestjs/microservices'
import { AuthController, OrderController } from './controllers'
import { AuthService, OrderService, OrderCheckerService } from './services'
import { natsClient, natsQueueClient } from '../../client'
import { CHECKER_ORDER_QUEUE_SERVICE, CHECKER_ORDER_SERVICE, CHECKER_AUTH_SERVICE, CHECKER_SCAN_QUEUE_SERVICE } from './services/types'

const scanQueue = natsQueueClient('scan_queue')
const orderQueue = natsQueueClient('order_queue')

  @Module({
    imports:[
      ClientsModule.register([
        {
          name: `${CHECKER_AUTH_SERVICE}`,
          ...natsClient
        }
      ]),
      ClientsModule.register([
        {
          name: `${CHECKER_ORDER_SERVICE}`,
          ...natsClient
        }
      ]),
      ClientsModule.register([
        {
          name: `${CHECKER_SCAN_QUEUE_SERVICE}`,
          ...scanQueue
        }
      ]),
      ClientsModule.register([
        {
          name: `${CHECKER_ORDER_QUEUE_SERVICE}`,
          ...orderQueue
        }
      ])
    ],
    providers: [
      AuthService,
      OrderService,
      OrderCheckerService
    ],
    controllers: [
      AuthController,
      OrderController
    ]
  })

  export class CheckerModule {}