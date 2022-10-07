import { injectable } from 'inversify';
import { IRepository } from '../../common/IRepository';
import { IMagazine } from '../../data/entities/IMagazine';

@injectable()
export class MagazineRepository implements IRepository<IMagazine> {
  find(): Promise<IMagazine> {
    throw new Error('Method not implemented.');
  }
  findOne(id: string): Promise<IMagazine[] | null> {
    throw new Error('Method not implemented.');
  }
  exists(id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<IMagazine> {
    throw new Error('Method not implemented.');
  }
  edit(id: string, data: IMagazine): Promise<IMagazine> {
    throw new Error('Method not implemented.');
  }
  insertMany(data: IMagazine[]): Promise<any> {
    throw new Error('Method not implemented.');
  }
  insert(data: IMagazine): Promise<IMagazine> {
    throw new Error('Method not implemented.');
  }
}
