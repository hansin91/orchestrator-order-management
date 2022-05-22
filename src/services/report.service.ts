import { Injectable, Inject } from '@nestjs/common'
import { ClientProxy } from '@nestjs/microservices'
import { IPayload } from '@interfaces'

@Injectable()
export class ReportService {

  constructor(@Inject('REPORT_SERVICE') private readonly clientService: ClientProxy) {}
  
  createReport(payload: IPayload) {
    const pattern = {cmd: 'create-report'}
    return this.clientService.send<any>(pattern, payload).toPromise()
  }

  loadReports(payload: IPayload) {
    const pattern = {cmd: 'load-reports'}
    return this.clientService.send<any>(pattern, payload).toPromise()
  }

  fileDownloaded(payload: IPayload) {
    const pattern = {cmd: 'file-downloaded'}
    return this.clientService.send<any>(pattern, payload).toPromise()
  }


}