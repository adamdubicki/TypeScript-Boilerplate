import 'reflect-metadata';
import {validate, Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max, IsBoolean, ValidateNested, ValidationError} from "class-validator"
import { Request } from 'express';

export class Nested {
  @IsBoolean()
  isNested!: boolean;
}

export class ExampleRequest {
  @Length(10, 20)
  foo: string;

  @Length(5, 10)
  baz: string;

  @ValidateNested()
  nested: Nested;
  
  constructor(req: Request) {
    this.foo = req.body.foo;
    this.baz = req.body.baz;
    this.nested = Object.assign(new Nested(), req.body.nested);
  }
}