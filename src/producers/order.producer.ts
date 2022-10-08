import { InjectQueue } from "@nestjs/bull"
import { Injectable } from "@nestjs/common"
import { Queue } from "bull"

@Injectable()
export class OrderProducerService {
  constructor(@InjectQueue('order-queue') private readonly queue: Queue) {}

  async processOrders(message: any) {
    const job = await this.queue.add('order-job', message, {
      removeOnComplete: true,
      attempts: 20
    })
    return job
  }
}