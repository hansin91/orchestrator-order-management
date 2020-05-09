import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { IPayload } from '@interfaces';

@Injectable()
export class OrderService {
  constructor(@Inject('ORDER_SERVICE') private readonly clientService: ClientProxy) {}

  loadOrderShippings(payload: IPayload) {
    const pattern = { cmd: 'order-shippings'};
    return this.clientService.send<any>(pattern, payload).toPromise();
  }

}
