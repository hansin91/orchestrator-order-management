import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { IPayload } from '@interfaces';

@Injectable()
export class PriceService {
  constructor(@Inject('PRICE_SERVICE') private readonly clientService: ClientProxy ){}

  loadPrices(payload: IPayload) {
    const pattern = { cmd: 'load-prices' };
    return this.clientService.send<any>(pattern, payload).toPromise();
  }

}
