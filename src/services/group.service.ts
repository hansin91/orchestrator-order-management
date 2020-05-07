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

  editGroup(payload: IPayload) {
    const pattern = { cmd: 'edit-group'};
    return this.clientService.send<any>(pattern, payload).toPromise();
  }

  loadGroups(token: string) {
    const pattern = { cmd: 'load-groups'};
    return this.clientService.send<any>(pattern, token).toPromise();
  }
}