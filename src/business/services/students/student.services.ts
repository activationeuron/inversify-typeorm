import { inject, injectable } from 'inversify';
import { TYPES } from '../../../types';
import { StudentRepository } from '../../data/repository/postgres/student.repository';

@injectable()
export class StudentService {
  private _studentRepo: StudentRepository;
  constructor(@inject(TYPES.StudentRepository) studentRepo: StudentRepository) {
    this._studentRepo = studentRepo;
  }

  //   constructor(
  //     @inject(TYPES.StudentRepository)
  //     studentRepo: StudentRepository
  //   ) {
  //     this._studentRepo = studentRepo;
  //     console.log(studentRepo);
  //   }

  async getStudents() {
    const students = await this._studentRepo.find();
    return students;
  }
}
