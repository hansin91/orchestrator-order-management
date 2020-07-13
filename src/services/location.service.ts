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

  deleteWarehouse(payload: IPayload) {
    const pattern = { cmd: 'delete-warehouse'};
    return this.clientService.send<any>(pattern, payload).toPromise();
  }

  loadRooms(payload: IPayload) {
    const pattern = { cmd: 'load-rooms' };
    return this.clientService.send<any>(pattern, payload).toPromise();
  }

  createRoom(payload: IPayload) {
    const pattern = { cmd: 'create-room' };
    return this.clientService.send<any>(pattern, payload).toPromise();
  }

  deleteRoom(payload: IPayload) {
    const pattern = { cmd: 'delete-room'};
    return this.clientService.send<any>(pattern, payload).toPromise();
  }

}
