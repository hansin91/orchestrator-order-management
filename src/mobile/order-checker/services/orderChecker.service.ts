import { Injectable, Inject } from '@nestjs/common'
import { ClientProxy } from '@nestjs/microservices'
import { CHECKER_ORDER_SERVICE, CHECKER_ORDER_QUEUE_SERVICE } from './types'

@Injectable()
export class OrderCheckerService {
  constructor(
    @Inject(`${CHECKER_ORDER_QUEUE_SERVICE}`) private readonly orderQueueService: ClientProxy, 
    @Inject(`${CHECKER_ORDER_SERVICE}`) private readonly clientService: ClientProxy) {}

  findOrderCheckers(payload: any) {
    const pattern = {cmd: 'checker-search'}
    return this.clientService.send<any>(pattern, payload).toPromise()
  }

  createOrderChecker(payload: any) {
    const pattern = {cmd: 'checker-create'}
    return this.orderQueueService.send<any>(pattern, payload).toPromise()
  }
}