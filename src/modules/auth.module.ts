import { Module, HttpModule } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { grpcClientOptions } from '../grpc-client.options';
import { AuthService } from '@services';
import { AuthController } from '@controllers';
import { AuthGrpcController } from '@grpcControllers';

@Module({
  imports: [
    HttpModule,
    ClientsModule.register([
      {
        name: 'AUTH_PACKAGE',
        ...grpcClientOptions,
      },
    ]),
  ],
  providers: [AuthService],
  controllers: [AuthController, AuthGrpcController],
})
export class AuthModule {}