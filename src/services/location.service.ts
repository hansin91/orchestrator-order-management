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

  loadRacks(payload: IPayload) {
    const pattern = { cmd: 'load-racks' };
    return this.clientService.send<any>(pattern, payload).toPromise();
  }

  createRack(payload: IPayload) {
    const pattern = { cmd: 'create-rack' };
    return this.clientService.send<any>(pattern, payload).toPromise();
  }

  deleteRack(payload: IPayload) {
    const pattern = { cmd: 'delete-rack'};
    return this.clientService.send<any>(pattern, payload).toPromise();
  }

  loadLocations(payload: IPayload) {
    const pattern = { cmd: 'load-locations' };
    return this.clientService.send<any>(pattern, payload).toPromise();
  }

  createLocation(payload: IPayload) {
    const pattern = { cmd: 'create-location' };
    return this.clientService.send<any>(pattern, payload).toPromise();
  }

  deleteLocation(payload: IPayload) {
    const pattern = { cmd: 'delete-location'};
    return this.clientService.send<any>(pattern, payload).toPromise();
  }

}
