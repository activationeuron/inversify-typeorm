export interface IRepository<T> {
  find(): Promise<T>;
  findOne(id: string): Promise<T[] | null>;
  exists(id: string): Promise<boolean>;
  delete(id: string): Promise<T>;
  edit(id: string, data: T): Promise<T>;
  insertMany(data: T[]): Promise<T[] | any>;
  insert(data: T): Promise<T>;
}
