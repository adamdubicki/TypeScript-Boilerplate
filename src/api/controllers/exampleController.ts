import 'reflect-metadata';
import {
    BaseHttpController,
    controller,
    httpGet,
    httpPost,
    response,
    requestBody
} from 'inversify-express-utils';
import { Request, Response, NextFunction, Router } from 'express';
import { useRequest } from '../../decorators/useRequest';
import { ExampleRequest } from './../requests/exampleRequest';
import { validate } from 'class-validator';

@controller('/foo')
export class ExampleController extends BaseHttpController {

  @httpGet('/')
  public async get(_req: Request, _res: Response) {
    return this.notFound();
  }

  @useRequest<ExampleRequest>(ExampleRequest)
  @httpPost('/bar')
  public async post(req: Request, _res: Response) {
    return this.ok(req.body);
  }
}
