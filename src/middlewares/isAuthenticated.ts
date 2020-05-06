import { Injectable, NestMiddleware, HttpStatus, HttpException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class IsAuthenticated implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const authorization =  req.headers.authorization;
    if (!authorization) {
      throw new HttpException({
        error: {
          status: HttpStatus.UNAUTHORIZED,
          message: 'Please login first',
        },
      }, HttpStatus.UNAUTHORIZED);
    } else {
      const token = authorization.split(' ')[1];
      if (!token) {
        throw new HttpException({
          error: {
            status: HttpStatus.UNAUTHORIZED,
            message: 'Please login first',
          },
        }, HttpStatus.UNAUTHORIZED);
      } else {
        next();
      }
    }
  }
}
