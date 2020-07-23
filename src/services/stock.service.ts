import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { IPayload } from '@interfaces';

@Injectable()
export class StockService {
  constructor(@Inject('STOCK_SERVICE') private readonly clientService: ClientProxy ){}

  loadStocks(payload: IPayload) {
    const pattern = { cmd: 'load-stocks' };
    return this.clientService.send<any>(pattern, payload).toPromise();
  }

}
