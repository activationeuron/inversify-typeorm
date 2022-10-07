import busboy from 'busboy';
import { Request } from 'express';
import { injectable } from 'inversify';
import { IReadResponse } from './IReadResponse';
const { parse } = require('csv-parse');

@injectable()
export class CSVReader {
  private data: any[] = [];
  reader<T>(req: Request) {
    console.log('csv Reader');
    return new Promise<IReadResponse<T>>((resolve, reject) => {
      const fd: busboy.Busboy = busboy({ headers: req.headers });

      fd.on('file', (name, file, info) => {
        const { filename, encoding, mimeType } = info;
        console.log(
          `File [${name}]: filename: %j, encoding: %j, mimeType: %j`,
          filename,
          encoding,
          mimeType
        );

        file
          .pipe(parse({ delimiter: ';', headers: true, columns: true }))
          .on('data', (data: any) => {
            //   console.log(`File [${name}] got ${data.length} bytes`);
            //   console.log(String(data));
            this.data.push(data);
            console.log(data.length);
          })
          .on('close', () => {
            console.log(`File [${name}] done`);
          });
      });

      fd.on('field', (name, val, info) => {
        console.log(`Field [${name}]: value: %j`, val);
      });

      fd.on('close', () => {
        resolve({ success: true, data: this.data });

        console.log('Done parsing form!');
      });
      fd.on('error', () => {
        reject({ success: true, data: this.data });
      });
      console.log('init');
      req.pipe(fd);
    });
  }
}
