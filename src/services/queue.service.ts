import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { IPayload } from '@interfaces';

@Injectable()
export class QueueService {
  constructor(@Inject('QUEUE_SERVICE') private readonly clientService: ClientProxy){}

  saveOrder(payload: IPayload) {
    const pattern = { cmd: 'save-order'};
    return this.clientService.send<any>(pattern, payload).toPromise();
  }
}