import { Request, Response } from 'express';
import { inject } from 'inversify';
import {
  controller,
  httpGet,
  request,
  requestBody,
  response,
} from 'inversify-express-utils';
import { StudentService } from '../../../business/services/students/student.services';
import { TYPES } from '../../../types';

@controller('/students')
export class StudentController {
  private _studentService: StudentService;

  constructor(@inject(TYPES.StudentService) studentServices: StudentService) {
    this._studentService = studentServices;
  }

  @httpGet('/get-all')
  async getAll(
    @request() req: Request,
    @response() res: Response,
    @requestBody() body: any
  ) {
    const students = await this._studentService.getStudents();
    return res.json(students);
  }
}
