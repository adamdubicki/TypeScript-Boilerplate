import { ValidationError } from 'class-validator';

export class ValidationErrorResponse {
  static json(errors: ValidationError[]) {

    return {
      'foo': 'bar'
    }
  }
}