import { inject, injectable } from 'inversify';
import { IBook } from '../../data/entities/IBook';
import { BookRepository } from '../../repository/loki/books';
import { TYPES } from '../../types';

@injectable()
export class BookService {
  private _bookRepository: BookRepository;
  constructor(@inject(TYPES.BookRepository) bookRepository: BookRepository) {
    console.log('Book Services');
    this._bookRepository = bookRepository;
  }
  async insertBooks(books: IBook[]) {
    console.log(books);
    return this._bookRepository.insertMany(books);
  }
}
