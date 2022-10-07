import { injectable } from 'inversify';
import loki, { Collection } from 'lokijs';

const db = new loki('assingment.db');

@injectable()
export class DBContext {
  public _db: Collection;
  constructor() {
    this._db = db.addCollection<any>('items');
  }
  addCollection<T>(name: string, options: any = {}) {
    return db.addCollection<T | any>(name, options);
  }
}
