import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { IPayload } from '@interfaces';

@Injectable()
export class StatusService {
  constructor(@Inject('STATUS_SERVICE') private readonly clientService: ClientProxy) {}

  loadStatus(payload: IPayload) {
    const pattern = { cmd: 'load-status'};
    return this.clientService.send<any>(pattern, payload).toPromise();
  }

  loadStatusSummary(payload: IPayload) {
    const pattern = { cmd: 'load-status-summary'};
    return this.clientService.send<any>(pattern, payload).toPromise();
  }
}