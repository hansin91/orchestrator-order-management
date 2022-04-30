import { Controller, Delete, Get, Req, Res, HttpException, Post, Put, Patch, HttpStatus } from '@nestjs/common'
import { Request, Response } from 'express'
import { OrderDetailService, OrderService, QueueService, UploadedFileService } from '@services'
import { FileProducerService, OrderProducerService } from '@producers'

@Controller('orders')
export class OrderController {
  constructor(
    private readonly queueService: QueueService,
    private readonly uploadedFileService: UploadedFileService,
    private readonly orderDetailService: OrderDetailService,
    private readonly orderService: OrderService,
    private readonly orderProducerService: OrderProducerService,
    private readonly fileProducerService: FileProducerService) {}

  @Post()
  async saveOrder(@Req() req: Request, @Res() res: Response) {
    try {
      const payload = {token: req.headers.authorization.split(' ')[1], body: req.body};
      const response = await this.queueService.saveOrder(payload);
      res.status(response.status).json(response);
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }

  @Patch()
  async setFlagOrderPrinted(@Req() req: Request, @Res() res: Response){
    try {
      const payload = {token: req.headers.authorization.split(' ')[1], body: req.body};
      const response = await this.orderService.printOrders(payload);
      res.status(response.status).json(response);
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }

  @Put()
  async editOrder(@Req() req: Request, @Res() res: Response) {
    try {
      const payload = {token: req.headers.authorization.split(' ')[1], body: req.body};
      const response = await this.orderService.editOrder(payload);
      res.status(response.status).json(response);
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }

  @Post('bulk')
  async saveBulkOrder(@Req() req: Request, @Res() res: Response) {
    try {
      const payload = {token: req.headers.authorization.split(' ')[1], body: req.body};
      const response = await this.queueService.saveBulkOrder(payload);
      res.status(response.status).json(response);
    } catch (error) {
      console.log(error, '------- ***** ------')
      throw new HttpException(error, error.status);
    }
  }
2
  @Post('export')
  async getExportedOrders (@Req() req: Request, @Res() res: Response) {
    try {
      const [,token] = req.headers.authorization.split(' ')
      const param = req.body
      let payload = {token, body: param}
      const response = await this.orderService.loadExportedOrders(payload)
      res.status(response.status).json(response)
    } catch (error) {
      throw new HttpException(error, error.status)
    }
  }

  @Get()
  async loadOrders(@Req() req: Request, @Res() res: Response) {
    try {
      let payload;
      payload = {
        token: req.headers.authorization.split(' ')[1],
      };
      const { search, stores, dropshipping, offset, limit, date, start, end, shipping, status, page, shippingId } = req.query;
      if (date) {
        payload.date = date;
      }
      if (shipping) {
        payload.shipping = shipping;
      }
      if (status) {
        payload.status = status;
      }
      if (page) {
        payload.page = page;
      }
      if (shippingId) {
        payload.shippingId = shippingId;
      }
      if (start) {
        payload.start = start;
      }
      if (end) {
        payload.end = end;
      }
      if (offset) {
        payload.offset = offset;
      }
      if (limit) {
        payload.limit = limit;
      }
      if (dropshipping) {
        payload.dropshipping = dropshipping;
      }
      if (stores) {
        payload.stores = stores;
      }
      if (search) {
        payload.search = search;
      }
      const response = await this.orderService.loadOrders(payload);
      res.status(response.status).json(response);
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }

  @Get('shopee')
  async loadOrderShopee(@Req() req: Request, @Res() res: Response) {
    try {
      let payload;
      payload = {
        token: req.headers.authorization.split(' ')[1],
      };
      const { status, offset, limit } = req.query;
      if (status) {
        payload.status = status;
      }
      if (offset) {
        payload.offset = offset;
      }
      if (limit) {
        payload.limit = limit;
      }
      const response = await this.orderService.loadOrderShopee(payload);
      res.status(response.status).json(response);
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }

  @Get('total')
  async loadTotalOrderTotalPage(@Req() req: Request, @Res() res: Response) {
    try {
      let payload;
      payload = {
        token: req.headers.authorization.split(' ')[1],
      };
      const { search, stores, dropshipping, shipping, status, date, start, end } = req.query;
      if (date) {
        payload.date = date;
      }
      if (start) {
        payload.start = start;
      }
      if (end) {
        payload.end = end;
      }
      if (shipping) {
        payload.shipping = shipping;
      }
      if (status) {
        payload.status = status;
      }
      if (dropshipping) {
        payload.dropshipping = dropshipping;
      }
      if (stores) {
        payload.stores = stores;
      }
      if (search) {
        payload.search = search;
      }
      const response = await this.orderService.loadTotalOrderTotalPage(payload);
      res.status(response.status).json(response);
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }

  @Get('shippings')
  async loadOrderShippings(@Req() req: Request, @Res() res: Response) {
    try {
      let payload;
      payload = {
        token: req.headers.authorization.split(' ')[1],
      };
      const { search, stores, dropshipping, shipping, status, date, start, end } = req.query;
      if (date) {
        payload.date = date;
      }
      if (start) {
        payload.start = start;
      }
      if (end) {
        payload.end = end;
      }
      if (shipping) {
        payload.shipping = shipping;
      }
      if (status) {
        payload.status = status;
      }
      if (dropshipping) {
        payload.dropshipping = dropshipping;
      }
      if (stores) {
        payload.stores = stores;
      }
      if (search) {
        payload.search = search;
      }
      const response = await this.orderService.loadOrderShippings(payload);
      res.status(response.status).json(response);
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }

  @Get('stores')
  async loadOrderStores(@Req() req: Request, @Res() res: Response) {
    try {
      let payload;
      payload = {
        token: req.headers.authorization.split(' ')[1],
      };
      const { search, stores, dropshipping, shipping, status, date, start, end } = req.query;
      if (date) {
        payload.date = date;
      }
      if (start) {
        payload.start = start;
      }
      if (end) {
        payload.end = end;
      }
      if (shipping) {
        payload.shipping = shipping;
      }
      if (status) {
        payload.status = status;
      }
      if (dropshipping) {
        payload.dropshipping = dropshipping;
      }
      if (stores) {
        payload.stores = stores;
      }
      if (search) {
        payload.search = search;
      }
      const response = await this.orderService.loadOrderStores(payload);
      res.status(response.status).json(response);
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }

  @Get('dropshipping')
  async loadOrderDropshipping(@Req() req: Request, @Res() res: Response) {
    try {
      let payload;
      payload = {
        token: req.headers.authorization.split(' ')[1],
      };
      const { search, stores, dropshipping, shipping, status, date, start, end } = req.query;
      if (date) {
        payload.date = date;
      }
      if (start) {
        payload.start = start;
      }
      if (end) {
        payload.end = end;
      }
      if (shipping) {
        payload.shipping = shipping;
      }
      if (status) {
        payload.status = status;
      }
      if (dropshipping) {
        payload.dropshipping = dropshipping;
      }
      if (stores) {
        payload.stores = stores;
      }
      if (search) {
        payload.search = search;
      }
      const response = await this.orderService.loadOrderDropshipping(payload);
      res.status(response.status).json(response);
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }

  @Get('status')
  async loadOrderStatus(@Req() req: Request, @Res() res: Response) {
    try {
      let payload;
      payload = {
        token: req.headers.authorization.split(' ')[1],
      };
      const { search, stores, dropshipping, status, shipping, date, start, end } = req.query;
      if (date) {
        payload.date = date;
      }
      if (start) {
        payload.start = start;
      }
      if (end) {
        payload.end = end;
      }
      if (shipping) {
        payload.shipping = shipping;
      }
      if (status) {
        payload.status = status;
      }
      if (dropshipping) {
        payload.dropshipping = dropshipping;
      }
      if (stores) {
        payload.stores = stores;
      }
      if (search) {
        payload.search = search;
      }
      const response = await this.orderService.loadOrderStatus(payload);
      res.status(response.status).json(response);
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }

  @Get('print')
  async loadPrintedOrders(@Req() req: Request, @Res() res: Response) {
    try {
      let payload = {token: req.headers.authorization.split(' ')[1]} as any
      const { document, date, page, isSummary } = req.query
      if (date) {
        payload.date = date
      }
      if (page) {
        payload.page = page
      }
      payload.isSummary = isSummary
      payload.document = document
      let response = {} as any
      if (document === 'print') {
        response = await this.orderService.loadPrintedOrders(payload)
      } else {
        response = await this.orderService.loadThermalOrders(payload)
      }
      res.status(response.status).json(response)
    } catch (error) {
      throw new HttpException(error, error.status)
    }
  }

  @Get('locked')
  async loadOrderLocked(@Req() req: Request, @Res() res: Response) {
    try {
      let payload;
      payload = {
        token: req.headers.authorization.split(' ')[1],
      };
      const date = req.query.date;
      if (date) {
        payload.date = date;
      }
      const response = await this.orderService.loadOrderLocked(payload);
      res.status(response.status).json(response);
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }

  @Get('upload/:id')
  async loadUploadedFile(@Req() req: Request, @Res() res: Response) {
    try {
      const id = Number(req.params.id);
      const payload = {
        token: req.headers.authorization.split(' ')[1],
        id,
      };
      const response = await this.uploadedFileService.findUploadedFile(payload);
      res.status(response.status).json(response);
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }

  @Get('upload')
  async loadUploadedFiles(@Req() req: Request, @Res() res: Response) {
    try {
      let payload;
      payload = {
        token: req.headers.authorization.split(' ')[1],
      };
      const {search, page, limit} = req.query;
      if (search) {
        payload.search = search;
      }
      if (page) {
        payload.page = page;
      }
      if (limit) {
        payload.limit = limit;
      }
      const response = await this.uploadedFileService.loadUploadedFiles(payload);
      res.status(response.status).json(response);
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }

  @Get('pages')
  async loadOrderPages(@Req() req: Request, @Res() res: Response) {
    try {
      let payload;
      payload = {
        token: req.headers.authorization.split(' ')[1],
      };
      const {date} = req.query;
      if (date) {
        payload.date = date;
      }
      const response = await this.orderService.loadOrderPages(payload);
      res.status(response.status).json(response);
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }

  @Patch('upload/:id')
  async updateUploadedFile(@Req() req: Request, @Res() res: Response) {
    try {
      const id = Number(req.params.id);
      const payload = {
        token: req.headers.authorization.split(' ')[1],
        body: req.body,
        id,
      };
      const response = await this.uploadedFileService.updateUploadedFile(payload);
      res.status(response.status).json(response);
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }

  @Delete('upload/:id')
  async deleteUploadedFile(@Req() req: Request, @Res() res: Response) {
    try {
      const id = Number(req.params.id);
      const payload = {
        token: req.headers.authorization.split(' ')[1],
        id,
      };
      const response = await this.uploadedFileService.deleteUploadedFile(payload);
      res.status(response.status).json(response);
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }

  @Patch('mass')
  async startMassOrder(@Req() req: Request, @Res() res: Response) {
    try {
      const payload = {token: req.headers.authorization.split(' ')[1], body: req.body}
      const job = await this.fileProducerService.sendMessage(payload)
      const response = await job.finished()
      res.status(response.status).json(response)
    } catch (error) {
      throw new HttpException(error, error.status)
    }
  }

  @Post('mass')
  async saveOrderMass(@Req() req: Request, @Res() res: Response) {
    try {
      const payload = {token: req.headers.authorization.split(' ')[1], body: req.body}
      const job = await this.orderProducerService.massOrder(payload)
      res.status(HttpStatus.OK).json('completed')
    } catch (error) {
      throw new HttpException(error, error.status)
    }
  }

  @Post('details')
  async insertOrderDetail(@Req() req: Request, @Res() res: Response) {
    try {
      const payload = {token: req.headers.authorization.split(' ')[1], body: req.body};
      const response = await this.orderDetailService.insertOrderDetail(payload);
      res.status(response.status).json(response);
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }

}