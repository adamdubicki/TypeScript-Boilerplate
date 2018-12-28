import { IsString, MinLength, MaxLength } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateTodoDto {
  @ApiModelProperty()
  @IsString()
  @MinLength(10)
  readonly description: string;

  @ApiModelProperty()
  @IsString()
  @MaxLength(10)
  readonly title: string;
}
