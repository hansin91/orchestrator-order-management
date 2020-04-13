import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: ['auth'],
    protoPath: [
        join(__dirname, '../proto/auth.proto'),
      ],
  },
};