import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
} from '@nestjs/common';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const status = exception.response.error.status || HttpStatus.INTERNAL_SERVER_ERROR;
    const message = exception.response.error.message || 'Internal Server Error';

    response.status(status).json({
      status,
      message,
    });
  }
}