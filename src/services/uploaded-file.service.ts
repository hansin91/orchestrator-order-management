import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { IPayload } from '@interfaces';

@Injectable()
export class UploadedFileService {
  constructor(@Inject('UPLOADED_FILE_SERVICE') private readonly clientService: ClientProxy) {}

  loadUploadedFiles(payload: IPayload) {
    const pattern = {cmd: 'uploaded-files'};
    return this.clientService.send<any>(pattern, payload).toPromise();
  }
}