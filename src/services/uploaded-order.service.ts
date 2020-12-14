import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { IPayload } from '@interfaces';

@Injectable()
export class UploadedOrderService {
  constructor(@Inject('UPLOADED_ORDER_SERVICE') private readonly clientService: ClientProxy){}

  createUploadedOrders(payload: IPayload) {
    const pattern = { cmd: 'create-uploaded-orders'};
    return this.clientService.send<any>(pattern, payload).toPromise();
  }
}