import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { IPayload } from '@interfaces';

@Injectable()
export class ProductQueueService {
  constructor(@Inject('PRODUCT_QUEUE_SERVICE') private readonly clientService: ClientProxy){}

  editProduct(payload: IPayload) {
    const pattern = { cmd: 'edit-product'};
    return this.clientService.send<any>(pattern, payload).toPromise();
  }
}