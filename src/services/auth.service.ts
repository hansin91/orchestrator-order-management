import { Injectable, Inject } from '@nestjs/common';
import { ILogin } from '@interfaces';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AuthService {
  constructor(
    @Inject('AUTH_SERVICE') private readonly clientService: ClientProxy) {}

  login(payload: ILogin) {
    const pattern = { cmd: 'login'};
    return this.clientService.send<any>(pattern, payload).toPromise();
  }

  verify(token: string) {
    const pattern = { cmd: 'verify' };
    return this.clientService.send<any>(pattern, token).toPromise();
  }

  googleLogin(payload: any) {
    const pattern = { cmd: 'gLogin' };
    return this.clientService.send<any>(pattern, payload).toPromise();
  }
}