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

  loadProductStores(payload: IPayload) {
    const pattern = { cmd: 'load-product-stores'};
    return this.clientService.send<any>(pattern, payload).toPromise();
  }

  loadProducts(payload: IPayload) {
    const pattern = { cmd: 'load-products' };
    return this.clientService.send<any>(pattern, payload).toPromise();
  }

  loadProduct(payload: IPayload) {
    const pattern = { cmd: 'load-product-detail' };
    return this.clientService.send<any>(pattern, payload).toPromise();
  }

  setProductGroup(payload: IPayload) {
    const pattern = { cmd: 'set-product-group' };
    return this.clientService.send<any>(pattern, payload).toPromise();
  }
}