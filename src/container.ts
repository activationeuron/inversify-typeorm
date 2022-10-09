import { Container } from 'inversify';
import { GroupRepository } from './business/data/repository/postgres/group.repository';
import { RollRepository } from './business/data/repository/postgres/roll.repository';
import { StudentRepository } from './business/data/repository/postgres/student.repository';
import { GroupService } from './business/services/group/group.services';
import { RollService } from './business/services/rool/roll.services';
import { StudentService } from './business/services/students/student.services';
import { TYPES } from './types';

export const container = new Container();

container.bind<StudentService>(TYPES.StudentService).to(StudentService);
container
  .bind<StudentRepository>(TYPES.StudentRepository)
  .to(StudentRepository);
container.bind<RollService>(TYPES.RollService).to(RollService);
container.bind<RollRepository>(TYPES.RollRepository).to(RollRepository);
container.bind<GroupService>(TYPES.GroupService).to(GroupService);
container.bind<GroupRepository>(TYPES.GroupRepository).to(GroupRepository);

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
