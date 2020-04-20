import '../env';
import { Module, HttpModule } from '@nestjs/common';
import { ClientsModule, Transport, ClientOptions } from '@nestjs/microservices';
import { AuthService } from '@services';
import { AuthController } from '@controllers';

const host = process.env.HOST;
const port = Number(process.env.PORT);

export const clientOptions: ClientOptions = {
  transport: Transport.TCP,
  options: {
    host,
    port,
  },
};

@Module({
  imports: [
    HttpModule,
    ClientsModule.register([
      {
        name: 'AUTH_SERVICE',
        ...clientOptions,
      },
    ]),
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}