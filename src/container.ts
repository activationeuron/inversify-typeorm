import { Container } from 'inversify';
import { DBContext } from './business/data/data-source/db.context';
import { AuthorRepository } from './business/repository/loki/authors';
import { BookRepository } from './business/repository/loki/books';
import { MagazineRepository } from './business/repository/loki/magazine';
import { AuthorService } from './business/services/authors/author.service';
import { BookService } from './business/services/books/book.service';
import { MagazineServices } from './business/services/magazines/magazines.service';
import { CsvService } from './business/services/reader/csvReader.services';
import { TYPES } from './business/types';
import { CSVReader } from './business/utils/csvReader';
import { ReaderValidator } from './business/validation/reader/reader.validation';

export const container = new Container();

container.bind<DBContext>(TYPES.DBContext).to(DBContext);
container.bind<CSVReader>(TYPES.CSVReader).to(CSVReader);
container.bind<CsvService>(TYPES.CsvService).to(CsvService);
container.bind<ReaderValidator>(TYPES.ReaderValidator).to(ReaderValidator);
container.bind<BookRepository>(TYPES.BookRepository).to(BookRepository);
container.bind<BookService>(TYPES.BookService).to(BookService);
container.bind<AuthorRepository>(TYPES.AuthorRepository).to(AuthorRepository);
container.bind<AuthorService>(TYPES.AuthorService).to(AuthorService);
container.bind<MagazineServices>(TYPES.MagazineService).to(MagazineServices);
container
  .bind<MagazineRepository>(TYPES.MagazineRepository)
  .to(MagazineRepository);
