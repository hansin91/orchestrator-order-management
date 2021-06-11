import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { IPayload } from '@interfaces';

@Injectable()
export class OrderDetailService {
  constructor(@Inject('ORDER_DETAIL_SERVICE') private readonly clientService: ClientProxy) {}

  insertOrderDetail(payload: IPayload) {
    const event = 'insert-order-detail';
    return this.clientService.send<any>(event, payload).toPromise();
  }

}