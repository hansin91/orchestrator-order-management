import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { IPayload } from '@interfaces';

@Injectable()
export class LocationService {
  constructor(@Inject('LOCATION_SERVICE') private readonly clientService: ClientProxy ){}

  loadWarehouses(payload: IPayload) {
    const pattern = { cmd: 'load-warehouses' };
    return this.clientService.send<any>(pattern, payload).toPromise();
  }

  createWarehouse(payload: IPayload) {
    const pattern = { cmd: 'create-warehouse' };
    return this.clientService.send<any>(pattern, payload).toPromise();
  }

}
