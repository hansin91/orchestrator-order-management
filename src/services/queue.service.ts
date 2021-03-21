import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { IPayload } from '@interfaces';

@Injectable()
export class QueueService {
  constructor(@Inject('QUEUE_SERVICE') private readonly clientService: ClientProxy){}

  saveOrder(payload: IPayload) {
    const event = 'save-order';
    return this.clientService.send<any>(event, payload).toPromise();
  }

  saveBulkOrder(payload: IPayload) {
    const event = 'save-bulk-order';
    return this.clientService.send<any>(event, payload).toPromise();
  }

  startMassOrder(payload: IPayload) {
    const event = 'start-mass-order';
    return this.clientService.send<any>(event, payload).toPromise();
  }

  saveMassOrder(payload: IPayload) {
    const event = 'save-mass-order';
    return this.clientService.send<any>(event, payload).toPromise();
  }
}