import { Request } from 'express';
import 'reflect-metadata';
import { validateSync } from 'class-validator';
import { ValidationErrorResponse } from './validationErrorResponse';

/**
 * Decorator function to nominate a request
 * object for validation
 * @param {generic} type: A generic object instantiated from an express request
 */
export function useRequest<T>(type: (new (req:Request) => T)) {
  function validateRequest(target:Object, key: string, descriptor:any) {
    const originalMethod = descriptor.value;
    let isError = false;

    // Access the arguements passed to the base function
    descriptor.value = function () {

      // Instantiate the generic request object
      let request = new type(arguments[0]);
      const validation = validateSync(request);

      if(validation.length > 0) {
        arguments[1]
          .set('Content-Type', 'text/plain');
        arguments[1]
          .status(400)
          .json(ValidationErrorResponse.json(validation));
        arguments[1].end();
      }

      var result = originalMethod.apply(this, arguments);
      return result;
    };
    return descriptor;
  }

  // return the decorator
  return validateRequest;
}