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

  saveBulkOrder(payload: IPayload) {
    const pattern = { cmd: 'save-bulk-order'};
    return this.clientService.send<any>(pattern, payload).toPromise();
  }

  updateUploadedFile(payload: IPayload) {
    const pattern = { cmd: 'update-uploaded-file' };
    return this.clientService.send<any>(pattern, payload).toPromise();
  }

  saveMassOrder(payload: IPayload) {
    const pattern = {cmd: 'save-mass-order'};
    return this.clientService.send<any>(pattern, payload).toPromise();
  }
}