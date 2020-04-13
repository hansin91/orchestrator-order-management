import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { AuthService } from '@services';
import { ILogin } from '@interfaces';

@Controller()
export class AuthGrpcController {
  constructor(private readonly authService: AuthService){}

  @GrpcMethod('AuthService')
  login(data: ILogin) {
    return this.authService.login(data);
  }

}
