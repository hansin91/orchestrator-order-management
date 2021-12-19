import { InjectQueue } from "@nestjs/bull"
import { Injectable } from "@nestjs/common"
import { Queue } from "bull"

@Injectable()
export class UploadProducerService {
  constructor(@InjectQueue('upload-queue') private readonly queue: Queue) {}

  async sendMessage(message: any) {
    const job = await this.queue.add('upload-job', message, {
      removeOnComplete: true,
      attempts: 3,
      stackTraceLimit: 20,
    })
    return job
  }
}