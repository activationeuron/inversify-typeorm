import { Request, Response } from 'express';
import {
  controller,
  httpGet,
  httpPost,
  request,
  requestBody,
  response,
} from 'inversify-express-utils';

@controller('/roll')
export class RollController {
  @httpPost('/create')
  async getAll(
    @request() req: Request,
    @response() res: Response,
    @requestBody() body: any
  ) {}
}
