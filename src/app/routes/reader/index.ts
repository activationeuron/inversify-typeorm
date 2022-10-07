import { Request, Response } from 'express';
import { inject } from 'inversify';
import {
  controller,
  httpPost,
  queryParam,
  request,
  response,
} from 'inversify-express-utils';
import { TYPES } from '../../../business/types';
import { RequestFiles } from '../../../foundation/Request';
import { CSVReader } from '../../../business/utils/csvReader';
import { IAuthor } from '../../../business/data/entities/IAuthor';
import { IBook } from '../../../business/data/entities/IBook';
import { IMagazine } from '../../../business/data/entities/IMagazine';
import { ReaderValidator } from '../../../business/validation/reader/reader.validation';
import { IReadResponse } from '../../../business/utils/IReadResponse';
import { BookService } from '../../../business/services/books/book.service';
import { AuthorService } from '../../../business/services/authors/author.service';
import { MagazineServices } from '../../../business/services/magazines/magazines.service';

@controller('/reader')
export class ReaderController {
  private _bookService: BookService;
  private _csvReader: CSVReader;
  private _readerValidator: ReaderValidator;
  private _authorService: AuthorService;
  private _magazineService: MagazineServices;
  constructor(
    @inject(TYPES.BookService) bookService: BookService,
    @inject(TYPES.CSVReader) reader: CSVReader,
    @inject(TYPES.ReaderValidator) validator: ReaderValidator,
    @inject(TYPES.AuthorService) authorService: AuthorService,
    @inject(TYPES.MagazineService) magazineService: MagazineServices
  ) {
    this._bookService = bookService;
    this._csvReader = reader;
    this._readerValidator = validator;
    this._authorService = authorService;
    this._magazineService = magazineService;
  }

  @httpPost('/')
  async readFile(
    @request() req: RequestFiles,
    @queryParam() params: string,
    @response() res: Response
  ) {
    console.log(params);
    const [isValid, errors] = this._readerValidator.readerParams(params);
    console.log(isValid, errors, 'READER');

    if (isValid) {
      const { type }: any = params;

      if (type === 'author') {
        const csvData: IReadResponse<IAuthor> =
          await this._csvReader.reader<IAuthor>(req);

        console.log(csvData);
        const [isValid, error] = this._readerValidator.authorValidation(
          csvData.data
        );

        if (!isValid) {
          return res.status(500).json({ success: false, message: error });
        }

        if (csvData.success) {
          try {
            const authors = await this._authorService.insertAuthors(
              csvData.data
            );
            return res.status(201).json({ success: true, response: authors });
          } catch (error) {
            return res.status(500).json({ success: false, message: error });
          }
        }
      }

      if (type === 'book') {
        console.log('request book');
        // const csvData: { success: boolean; data: IBook[] } =
        //   await this._csvReader.reader<IBook>(req);
        // console.log(csvData);
        console.log(req);
        const csvData: IReadResponse<IBook> =
          await this._csvReader.reader<IBook>(req);

        const [isValid, error] = this._readerValidator.bookValidation(
          csvData.data
        );

        if (!isValid) {
          return res.status(500).json({ success: false, message: error });
        }

        if (csvData.success) {
          try {
            const books = await this._bookService.insertBooks(csvData.data);
            return res.status(201).json({ success: true, response: books });
          } catch (error) {
            return res.status(500).json({ success: false, message: error });
          }
        }
      }
      if (type === 'magazine') {
        const csvData: IReadResponse<IMagazine> =
          await this._csvReader.reader<IMagazine>(req);
        if (csvData.success) {
          try {
            const magazines = await this._magazineService.insertMagazines(
              csvData.data
            );
            console.log(magazines);
            return res.status(201).json({ success: true, response: magazines });
          } catch (error) {
            return res.status(500).json({ success: false, message: error });
          }
        }

        // const csvData: { success: boolean; data: IMagazine[] } =
        //   await this._csvReader.reader<IMagazine>(req);
        // console.log(csvData);
      }

      console.log(errors);
      return res.json(errors);

      // fs.createReadStream(req)
    }
  }
}
