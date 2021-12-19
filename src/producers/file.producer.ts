import { InjectQueue } from "@nestjs/bull"
import { Injectable } from "@nestjs/common"
import { Queue } from "bull"

@Injectable()
export class FileProducerService {
  constructor(@InjectQueue('file-queue') private readonly queue: Queue) {}

  async sendMessage(message: any) {
    const job = await this.queue.add('file-job', message, {
      removeOnComplete: true,
      attempts: 3,
      stackTraceLimit: 20,
    })
    return job
  }
}