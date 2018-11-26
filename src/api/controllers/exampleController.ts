import 'reflect-metadata';
import { injectable } from 'inversify';
import {
    BaseHttpController,
    BaseMiddleware,
    controller,
    httpGet,
    httpPost,
} from 'inversify-express-utils';
import { Request, Response, NextFunction } from 'express';

@controller('/foo')
export class ExampleController extends BaseHttpController {
  @httpGet('/')
    public async get(_req: Request, _res: Response) {
    return this.notFound();
  }

  @httpPost('/bar')
    public async post(req: Request, _res: Response) {
    return this.ok(req.body);
  }
}
