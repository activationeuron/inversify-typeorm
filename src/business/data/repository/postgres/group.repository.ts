import { injectable } from 'inversify';
import { Group } from '../../data-source/pg/entities/Group.entity';
import { IRepository } from '../../interface/common/IRepository';

@injectable()
export class GroupRepository implements IRepository<Group> {
  find(): Promise<Group> {
    throw new Error('Method not implemented.');
  }
  findOne(id: string): Promise<Group[] | null> {
    throw new Error('Method not implemented.');
  }
  exists(id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<Group> {
    throw new Error('Method not implemented.');
  }
  edit(id: string, data: Group): Promise<Group> {
    throw new Error('Method not implemented.');
  }
  insertMany(data: Group[]): Promise<any> {
    throw new Error('Method not implemented.');
  }
  insert(data: Group): Promise<Group> {
    throw new Error('Method not implemented.');
  }
}
