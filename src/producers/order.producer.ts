import { InjectQueue } from "@nestjs/bull"
import { Injectable } from "@nestjs/common"
import { Queue } from "bull"

@Injectable()
export class OrderProducerService {
  constructor(@InjectQueue('order-queue') private readonly queue: Queue) {}

  async processOrders(message: any) {
    const job = await this.queue.add('order-job', message, {
      removeOnComplete: true,
      removeOnFail: true,
      attempts: 3
    })
    return job
  }
}