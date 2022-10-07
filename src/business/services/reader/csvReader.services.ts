import { injectable } from 'inversify';
import { IAuthor } from '../../data/entities/IAuthor';
import { IBook } from '../../data/entities/IBook';
// import { ICsvReader } from '../../repository/interface/IcsvReader.repository';
import { IMagazine } from '../../data/entities/IMagazine';
import { IReadResponse } from '../../utils/IReadResponse';

@injectable()
export class CsvService {
  readBooks(books: IReadResponse<IBook>): Promise<IBook[][]> {
    throw new Error('Method not implemented.');
  }
  // readAuthors(authors: IReadResponse<IAuthor>): Promise<IAuthor[][]> {
  //   console.log(authors);
  // }
  readMagazines(): Promise<IMagazine> {
    throw new Error('Method not implemented.');
  }

  saveAuthors(authors: IReadResponse<IAuthor>): Promise<IAuthor[][]> {
    return new Promise<IAuthor[][]>((resolve, reject) => {});
  }
}
