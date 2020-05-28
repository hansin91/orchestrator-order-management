import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { IPayload } from '@interfaces';

@Injectable()
export class PageService {
  constructor(@Inject('PAGE_SERVICE') private readonly clientService: ClientProxy) {}

  lockDate(payload: IPayload) {
    const pattern = { cmd: 'lock-date'};
    return this.clientService.send<any>(pattern, payload).toPromise();
  }
}
