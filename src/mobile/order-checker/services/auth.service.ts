import { Injectable, Inject } from '@nestjs/common'
import { ClientProxy } from '@nestjs/microservices'

@Injectable()
export class AuthService {
  constructor(@Inject('CHECKER_AUTH_SERVICE') private readonly clientService: ClientProxy) {}

  loginUser(payload: any) {
    const pattern = {cmd: 'checker-login'}
    return this.clientService.send<any>(pattern, payload).toPromise()
  }

  registerUser(payload: any) {
    const pattern = {cmd: 'checker-register'}
    return this.clientService.send<any>(pattern, payload).toPromise()
  }

  verifyUser(payload: any) {
    const pattern = {cmd: 'checker-verify-user'}
    return this.clientService.send<any>(pattern, payload).toPromise()
  }

  loadRoles(payload: string) {
    const pattern = {cmd: 'checker-auth-roles'}
    return this.clientService.send<any>(pattern, payload).toPromise()
  }
}