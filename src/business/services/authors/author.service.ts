import { inject, injectable } from 'inversify';
import { IAuthor } from '../../data/entities/IAuthor';
import { IBook } from '../../data/entities/IBook';
import { AuthorRepository } from '../../repository/loki/authors';
import { BookRepository } from '../../repository/loki/books';
import { TYPES } from '../../types';

@injectable()
export class AuthorService {
  private _authorRepository: AuthorRepository;
  constructor(
    @inject(TYPES.AuthorRepository) bookRepository: AuthorRepository
  ) {
    console.log('Author service');
    this._authorRepository = bookRepository;
  }
  async insertAuthors(books: IAuthor[]) {
    return this._authorRepository.insertMany(books);
  }
}
