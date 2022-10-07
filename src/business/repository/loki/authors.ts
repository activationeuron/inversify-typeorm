import { inject, injectable } from 'inversify';
import RestError from '../../../foundation/errors/RestError';
import { IRepository } from '../../common/IRepository';
import { DBContext } from '../../data/data-source/db.context';
import { IAuthor } from '../../data/entities/IAuthor';
import { TYPES } from '../../types';

@injectable()
export class AuthorRepository implements IRepository<IAuthor> {
  private _authorCollection: Collection<IAuthor | any>;
  constructor(@inject(TYPES.DBContext) dbContext: DBContext) {
    console.log('executed class ');
    this._authorCollection = dbContext.addCollection<IAuthor>('authors', {
      unique: ['﻿email'],
    });
  }
  find(): Promise<IAuthor> {
    throw new Error('Method not implemented.');
  }
  findOne(id: string): Promise<IAuthor[] | null> {
    throw new Error('Method not implemented.');
  }
  exists(id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<IAuthor> {
    throw new Error('Method not implemented.');
  }
  edit(id: string, data: IAuthor): Promise<IAuthor> {
    throw new Error('Method not implemented.');
  }
  async insertMany(data: IAuthor[]): Promise<IAuthor[] | any> {
    try {
      const books = await this._authorCollection.insert(data);
      return books;
    } catch (error: any) {
      throw new RestError(500, error.message);
    }
  }
  insert(data: IAuthor): Promise<IAuthor> {
    throw new Error('Method not implemented.');
  }
}
