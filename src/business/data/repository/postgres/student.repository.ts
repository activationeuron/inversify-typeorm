import { readFile } from 'fs';
import { inject, injectable } from 'inversify';
import { DataSource } from 'typeorm';
import { TYPES } from '../../../../types';
import { dbContext } from '../../data-source/pg/db.context';
import { Student } from '../../data-source/pg/entities/Student.entity';
import { IRepository } from '../../interface/common/IRepository';
@injectable()
export class StudentRepository implements IRepository<any> {
  // constructor(@inject(TYPES.PGContext) pgContext: PGContext) {
  //   // this.pg = pgContext.;
  //   console.log(pgContext.manager, 'STUDENT reoi');
  //   this.pg = pgContext._pg;
  //   console.log(this.pg);
  // }

  async find(): Promise<Student[]> {
    // const student = this.pg.getRepository(Student);
    // console.log(await student.find());
    // return student.find();
    const students = await dbContext.manager.find<Student>(Student);
    return students;
  }
  findOne(id: string): Promise<any[] | null> {
    throw new Error('Method not implemented.');
  }
  exists(id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<any> {
    throw new Error('Method not implemented.');
  }
  edit(id: string, data: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
  insertMany(data: any[]): Promise<any> {
    throw new Error('Method not implemented.');
  }
  insert(data: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
