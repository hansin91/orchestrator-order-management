import { Inject, Injectable } from '@nestjs/common'
import { ClientProxy } from '@nestjs/microservices'
import { CHECKER_SCAN_QUEUE_SERVICE } from './types'

@Injectable()
export class OrderService {
  constructor(@Inject(`${CHECKER_SCAN_QUEUE_SERVICE}`) private readonly scanQueueService: ClientProxy) {}

  findOrder(payload: any) {
    const pattern = {cmd: 'checker-scan-queue'}
    return this.scanQueueService.send<any>(pattern, payload).toPromise()
  }

} 