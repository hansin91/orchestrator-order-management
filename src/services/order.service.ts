import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { IPayload } from '@interfaces';

@Injectable()
export class OrderService {
  constructor(@Inject('ORDER_SERVICE') private readonly clientService: ClientProxy) {}

  loadOrders(payload: IPayload) {
    const pattern = { cmd: 'orders'};
    return this.clientService.send<any>(pattern, payload).toPromise();
  }

  loadPrintedOrders(payload: IPayload) {
    const pattern = { cmd: 'order-print' };
    return this.clientService.send<any>(pattern, payload).toPromise();
  }

  printOrders(payload: IPayload) {
    const pattern = { cmd: 'print-orders'};
    return this.clientService.send<any>(pattern, payload).toPromise();
  }

  editOrder(payload: IPayload) {
    const pattern = { cmd: 'edit-order'};
    return this.clientService.send<any>(pattern, payload).toPromise();
  }

  loadTotalOrderTotalPage(payload: IPayload) {
    const pattern = { cmd: 'order-total'};
    return this.clientService.send<any>(pattern, payload).toPromise();
  }

  loadOrderShippings(payload: IPayload) {
    const pattern = { cmd: 'order-shippings'};
    return this.clientService.send<any>(pattern, payload).toPromise();
  }

  loadOrderStatus(payload: IPayload) {
    const pattern = { cmd: 'order-status'};
    return this.clientService.send<any>(pattern, payload).toPromise();
  }

  loadOrderLocked(payload: IPayload) {
    const pattern = { cmd: 'order-locked'};
    return this.clientService.send<any>(pattern, payload).toPromise();
  }

  loadOrderPages(payload: IPayload) {
    const pattern = { cmd: 'order-pages'};
    return this.clientService.send<any>(pattern, payload).toPromise();
  }

}
