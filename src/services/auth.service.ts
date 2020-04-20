import { Injectable, Inject } from '@nestjs/common';
import { ILogin } from '@interfaces';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AuthService {
  constructor(
    @Inject('AUTH_SERVICE') private readonly clientService: ClientProxy) {}

  login(payload: ILogin) {
    const pattern = { cmd: 'login'};
    return this.clientService.send<ILogin>(pattern, payload).toPromise();
  }
}