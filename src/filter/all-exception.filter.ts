import { Catch, ArgumentsHost, Inject, HttpServer } from '@nestjs/common';
import { BaseExceptionFilter, HTTP_SERVER_REF } from '@nestjs/core';

@Catch()
export class AllExceptionFilter extends BaseExceptionFilter {
  constructor(@Inject(HTTP_SERVER_REF) applicationRef: HttpServer) {
    super(applicationRef);
  }

  catch(exception: any, host: ArgumentsHost) {
    super.catch(exception, host);
  }
}
