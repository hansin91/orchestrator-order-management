import { Inject, Injectable } from '@nestjs/common'
import { ClientProxy } from '@nestjs/microservices'
import { CHECKER_STATUS_SERVICE } from './types'

@Injectable()
export class StatusService {
  constructor(@Inject(`${CHECKER_STATUS_SERVICE}`) private readonly clientService: ClientProxy) {}

  findStatus(payload: any) {
    const pattern = {cmd: 'checker-status'}
    return this.clientService.send<any>(pattern, payload).toPromise()
  }

} 