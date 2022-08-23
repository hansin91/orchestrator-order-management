import { Module } from '@nestjs/common'
import { ClientsModule } from '@nestjs/microservices'
import { AuthController } from './controllers'
import { AuthService } from './services'
import { natsClient } from '../../client'

  @Module({
    imports:[
      ClientsModule.register([
        {
          name: 'CHECKER_AUTH_SERVICE',
          ...natsClient
        }
      ])
    ],
    providers: [
      AuthService
    ],
    controllers: [
      AuthController
    ]
  })

  export class CheckerModule {}