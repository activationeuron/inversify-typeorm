import { injectable } from 'inversify';
import ajv from '../avj';
import { JSONSchemaType } from 'ajv';
import { IBook } from '../../data/entities/IBook';
import { IReadResponse } from '../../utils/IReadResponse';
import { IAuthor } from '../../data/entities/IAuthor';

@injectable()
export class ReaderValidator {
  readerParams(data: any) {
    interface Request {
      type: string;
    }
    const schema: JSONSchemaType<Request> = {
      type: 'object',
      required: ['type'],
      errorMessage: {
        properties: {
          type: 'parameter type is required',
        },

        _: 'request should have valid type ',
      },
      properties: {
        type: { type: 'string' },
      },
    };
    const validate = ajv.compile(schema);
    return [validate(data), validate.errors];
  }

  bookValidation(book: IBook[]) {
    const schema: JSONSchemaType<IBook[]> = {
      type: 'array',
      items: {
        type: 'object',
        required: ['isbn'],
        properties: {
          title: { type: 'string' },
          isbn: { type: 'string' },
          authors: { type: 'string' },
          description: { type: 'string' },
        },
      },
    };
    console.log('ran books validations');
    const validate = ajv.compile(schema);
    return [validate(book), validate.errors];
  }

  authorValidation(author: IAuthor[]) {
    const schema: JSONSchemaType<IAuthor[]> = {
      type: 'array',
      items: {
        type: 'object',
        required: ['email'],
        properties: {
          email: { type: 'string' },
          firstname: { type: 'string' },
          lastname: { type: 'string' },
        },
      },
    };
    const validate = ajv.compile(schema);

    return [validate(author), validate.errors];
  }
}
