import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    const eResponse = exception.getResponse();
    
    // console.log(eResponse.toString()[1])
    
//  console.dir(exception)

    response
      .status(status)
      .json({
        // statusCode: eResponse.valueOf(),
        ...eResponse.valueOf(),
        timestamp: new Date().toISOString(),
        path: request.url,
      });
  }
}