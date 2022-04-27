import { Injectable, Inject } from '@nestjs/common'
import { ClientProxy } from '@nestjs/microservices'
import { IPayload } from '@interfaces'

@Injectable()
export class ReportService {

  constructor(@Inject('REPORT_SERVICE') private readonly clientService: ClientProxy) {}
  
  requestReport(payload: IPayload) {
    const pattern = {cmd: 'request-report'}
    return this.clientService.send<any>(pattern, payload).toPromise()
  }

  findReports(payload: IPayload) {
    const pattern = {cmd: 'find-reports'}
    return this.clientService.send<any>(pattern, payload).toPromise()
  }
}