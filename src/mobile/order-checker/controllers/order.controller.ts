import { Body, Controller, HttpException, Post, Req, Res } from '@nestjs/common'
import { Response, Request } from 'express'
import { OrderCheckerService, OrderService } from '../services'

@Controller('orders')
export class OrderController {

  constructor(
    private orderCheckerService: OrderCheckerService,
    private orderService: OrderService) {}
  
  @Post()
  async createOrderChecker(@Body() data: any, @Req() req: Request, @Res() res: Response) {
    try {
      const {headers: {authorization}} = req
      const [,token] = authorization.split(' ')
      const payload = {token, body: data}
      const response = await this.orderCheckerService.createOrderChecker(payload)
      res.status(response.status).json(response)
    } catch (error) {
      throw new HttpException(error, error.status)
    }
  }

  @Post('scan')
  async scanOrder(@Body() data: any, @Req() req: Request, @Res() res: Response) {
    try {
      const {headers: {authorization}} = req
      const [,token] = authorization.split(' ')
      const payload = {token, body: data}
      const response = await this.orderService.findOrder(payload)
      res.status(response.status).json(response)
    } catch (error) {
      throw new HttpException(error, error.status)
    }
  }

  @Post('search')
  async findOrderCheckers(@Body() data: any, @Req() req: Request, @Res() res: Response) {
    try {
      const {headers: {authorization}} = req
      const [,token] = authorization.split(' ')
      const payload = {token, body: data}
      const response = await this.orderCheckerService.findOrderCheckers(payload)
      res.status(response.status).json(response)
    } catch (error) {
      throw new HttpException(error, error.status)
    }
  }
}