import { inject, injectable } from 'inversify';
import { Collection } from 'lokijs';
import RestError from '../../../foundation/errors/RestError';
import { IRepository } from '../../common/IRepository';
import { DBContext } from '../../data/data-source/db.context';
import { IBook } from '../../data/entities/IBook';
import { TYPES } from '../../types';

@injectable()
export class BookRepository implements IRepository<IBook> {
  private _bookCollection: Collection<IBook | any>;
  constructor(@inject(TYPES.DBContext) dbContext: DBContext) {
    console.log('executed class ');
    this._bookCollection = dbContext.addCollection<IBook>('books', {
      unique: ['isbn'],
    });
  }
  find(): Promise<IBook> {
    throw new Error('Method not implemented.');
  }
  findOne(id: string): Promise<IBook[] | null> {
    throw new Error('Method not implemented.');
  }
  exists(id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<IBook> {
    throw new Error('Method not implemented.');
  }
  edit(id: string, data: IBook): Promise<IBook> {
    throw new Error('Method not implemented.');
  }
  async insertMany(data: IBook[]): Promise<IBook[] | any> {
    try {
      const books = await this._bookCollection.insert(data);
      return books;
    } catch (error: any) {
      throw new RestError(422, error.message);
    }
  }
  insert(data: IBook): Promise<IBook> {
    throw new Error('Method not implemented.');
  }
}
