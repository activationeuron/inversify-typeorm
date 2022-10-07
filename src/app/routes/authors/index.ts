import { controller, httpGet, httpPost } from 'inversify-express-utils';

@controller('/authors')
export class AuthorController {
  @httpGet('/')
  async;
}
