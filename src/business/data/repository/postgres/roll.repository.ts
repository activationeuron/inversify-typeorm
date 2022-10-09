import { injectable } from 'inversify';
import { Roll } from '../../data-source/pg/entities/Roll.entity';
import { IRepository } from '../../interface/common/IRepository';

@injectable()
export class RollRepository implements IRepository<Roll> {
  find(): Promise<Roll> {
    throw new Error('Method not implemented.');
  }
  findOne(id: string): Promise<Roll[] | null> {
    throw new Error('Method not implemented.');
  }
  exists(id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<Roll> {
    throw new Error('Method not implemented.');
  }
  edit(id: string, data: Roll): Promise<Roll> {
    throw new Error('Method not implemented.');
  }
  insertMany(data: Roll[]): Promise<any> {
    throw new Error('Method not implemented.');
  }
  insert(data: Roll): Promise<Roll> {
    throw new Error('Method not implemented.');
  }
}
