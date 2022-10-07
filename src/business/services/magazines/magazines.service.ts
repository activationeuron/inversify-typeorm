import { inject, injectable } from 'inversify';
import { IMagazine } from '../../data/entities/IMagazine';
import { MagazineRepository } from '../../repository/loki/magazine';
import { TYPES } from '../../types';

@injectable()
export class MagazineServices {
  private _magazineRepository: MagazineRepository;
  constructor(
    @inject(TYPES.MagazineRepository) bookRepository: MagazineRepository
  ) {
    console.log('Book Services');
    this._magazineRepository = bookRepository;
  }
  async insertMagazines(books: IMagazine[]) {
    return this._magazineRepository.insertMany(books);
  }
}
