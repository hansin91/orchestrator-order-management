import { Controller, Get, HttpException, HttpStatus, Post, Put, Req, Res } from '@nestjs/common'
import { Request, Response } from 'express'
import { ReportService, TokenService } from '@services'
import { ReportProducerService } from '@producers'

@Controller('reports')
export class ReportController {
  constructor(
    private readonly reportProducerService: ReportProducerService,
    private readonly tokenService: TokenService,
    private readonly reportService: ReportService) {}
  
  @Put()
  async fileDownloaded(@Req() req: Request, @Res() res: Response) {
    try {
      const report = req.body
      const {user} = report
      const token = this.tokenService.generateApiToken(user)
      const payload = {token, body: report}
      const response = await this.reportService.fileDownloaded(payload)
      res.status(response.status).json(response)
    } catch (error) {
      const {status} = error
      throw new HttpException(error, status)
    }
  }

  @Get()
  async loadReports(@Req() req: Request, @Res() res: Response) {
    try {
      const {headers: { authorization }} = req
      const [, token] = authorization.split(' ')
      const {type} = req.query
      const payload = {token, body: {type}}
      const response = await this.reportService.loadReports(payload)
      res.status(response.status).json(response)
    } catch (error) {
      const {status} = error
      throw new HttpException(error, status)
    }
  }

  @Post()
  async createReport(@Req() req: Request, @Res() res: Response) {
    try {
      const {type, user, name} = req.body
      const param = {type, user, name}
      const token = this.tokenService.generateApiToken(user)
      const payload = {token, body: param}
      const response = await this.reportService.createReport(payload)
      res.status(response.status).json(response)
    } catch (error) {
      const {status} = error
      throw new HttpException(error, status)
    }
  }

  @Post('process')
  async processReports(@Req() req: Request, @Res() res: Response) {
    try {
      const report = req.body
      const {user} = report
      const token = this.tokenService.generateApiToken(user)
      const payload = {token, body: report}
      this.reportProducerService.productReports(payload)
      res.status(HttpStatus.OK).json({status: HttpStatus.OK, report})
    } catch (error) {
      const {status} = error
      throw new HttpException(error, status)
    }
  }
}