import { Container } from 'inversify';
import { StudentRepository } from './business/data/repository/student.repository';
import { StudentService } from './business/services/students/student.services';
import { TYPES } from './types';

export const container = new Container();

container.bind<StudentService>(TYPES.StudentService).to(StudentService);
container
  .bind<StudentRepository>(TYPES.StudentRepository)
  .to(StudentRepository);
// container.bind<CSVReader>(TYPES.CSVReader).to(CSVReader);
// container.bind<CsvService>(TYPES.CsvService).to(CsvService);
// container.bind<ReaderValidator>(TYPES.ReaderValidator).to(ReaderValidator);
// container.bind<BookRepository>(TYPES.BookRepository).to(BookRepository);
// container.bind<BookService>(TYPES.BookService).to(BookService);
// container.bind<AuthorRepository>(TYPES.AuthorRepository).to(AuthorRepository);
// container.bind<AuthorService>(TYPES.AuthorService).to(AuthorService);
// container.bind<MagazineServices>(TYPES.MagazineService).to(MagazineServices);
// container
//   .bind<MagazineRepository>(TYPES.MagazineRepository)
//   .to(MagazineRepository);
