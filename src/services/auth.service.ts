import { Injectable, HttpService } from '@nestjs/common';
import { ILogin } from '@interfaces';

@Injectable()
export class AuthService {
  constructor(private readonly httpService: HttpService){}

  login(data: ILogin) {
    return this.httpService.post(process.env.ADMIN_URL + '/api/auth/login', data);
  }
}