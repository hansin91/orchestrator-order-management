import { InjectQueue } from "@nestjs/bull"
import { Injectable } from "@nestjs/common"
import { Queue } from "bull"

@Injectable()
export class ReportProducerService {
  constructor(@InjectQueue('report-queue') private readonly queue: Queue) {}

  async productReports(message: any) {
    const job = await this.queue.add('product-job', message, {
      removeOnComplete: true,
      attempts: 3
    })
    return job
  }
}