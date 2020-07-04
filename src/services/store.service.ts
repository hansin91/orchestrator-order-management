import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { IPayload } from '@interfaces';

@Injectable()
export class StoreService {
  constructor(@Inject('STORE_SERVICE') private readonly clientService: ClientProxy ){}

  loadStoreShippings(payload: IPayload) {
    const pattern = { cmd: 'store-shippings' };
    return this.clientService.send<any>(pattern, payload).toPromise();
  }

  loadStores(payload: IPayload) {
    const pattern = { cmd: 'load-stores' };
    return this.clientService.send<any>(pattern, payload).toPromise();
  }

}
