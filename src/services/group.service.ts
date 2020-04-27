import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { IPayload } from '@interfaces';

@Injectable()
export class GroupService {
  constructor(@Inject('GROUP_SERVICE') private readonly clientService: ClientProxy) {}

  addGroup(payload: IPayload) {
    const pattern = { cmd: 'add-group'};
    return this.clientService.send<any>(pattern, payload).toPromise();
  }
}