import { InjectQueue } from "@nestjs/bull"
import { Injectable } from "@nestjs/common"
import { Queue } from "bull"

@Injectable()
export class ProductsReportProducerService {
  constructor(@InjectQueue('products-report-queue') private readonly queue: Queue) {}

  async productsReport(message: any) {
    const job = await this.queue.add('products-report-job', message, {
      removeOnComplete: true,
      attempts: 3
    })
    return job
  }
}