import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { IPayload } from '@interfaces';

@Injectable()
export class ShippingService {
  constructor(@Inject('SHIPPING_SERVICE') private readonly clientService: ClientProxy) {}

  loadShippings(payload: IPayload) {
    const pattern = { cmd: 'load-shippings'};
    return this.clientService.send<any>(pattern, payload).toPromise();
  }

  loadShippingSummary(payload: IPayload) {
    const pattern = { cmd: 'load-shipping-summary' };
    return this.clientService.send<any>(pattern, payload).toPromise();
  }

  loadShippingOrders(payload: IPayload) {
    const pattern = { cmd: 'load-shipping-orders'};
    return this.clientService.send<any>(pattern, payload).toPromise();
  }
}