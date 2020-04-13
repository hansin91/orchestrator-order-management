import { Controller, OnModuleInit, Inject, Post, Body } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { AuthService } from '@services';
import { ILogin } from '@interfaces';

@Controller('auth')
export class AuthController implements OnModuleInit {
  constructor(@Inject('AUTH_PACKAGE')
    private readonly client: ClientGrpc,
              private authService: AuthService) {}

  onModuleInit() {
    this.authService = this.client.getService<AuthService>('AuthService');
  }

  @Post()
  login(@Body('data') data: ILogin) {
    return this.authService.login(data);
  }
}
