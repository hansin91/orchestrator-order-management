import { Controller, Post, Req, Res } from "@nestjs/common";
import { Request, Response } from "express";

@Controller('shopee')
export class ShopeeController {
  constructor() {}

  @Post('webhook')
  async webhook(@Req() req: Request, @Res() res: Response) {
    console.log(req.body);
    res.status(200).json({ message: 'OK' });
  }
}