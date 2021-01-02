import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { IPayload } from '@interfaces';

@Injectable()
export class ShopeeService {
  constructor(@Inject('SHOPEE_SERVICE') private readonly clientService: ClientProxy) {}

  loadCategoryAttributes(payload: IPayload) {
    const pattern = { cmd: 'load-shopee-category-attributes'};
    return this.clientService.send<any>(pattern, payload).toPromise();
  }
}