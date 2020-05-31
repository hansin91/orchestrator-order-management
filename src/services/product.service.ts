import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { IPayload } from '@interfaces';

@Injectable()
export class ProductService {
  constructor(@Inject('PRODUCT_SERVICE') private readonly clientService: ClientProxy) {}

  loadProductSummary(payload: IPayload) {
    const pattern = { cmd: 'load-product-summary'};
    return this.clientService.send<any>(pattern, payload).toPromise();
  }
}