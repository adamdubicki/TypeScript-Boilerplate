import { Todo } from './interfaces/todo.interface';
import { CreateTodoDto } from './dto/create-todo.dto';
import {
  Controller,
  Get,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('todos')
@Controller('todos')
export class TodosController {
  constructor(private readonly todoService: TodosService) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  create(@Body() createTodoDto: CreateTodoDto) {
    this.todoService.create(createTodoDto);
  }

  @Get()
  async findAll(): Promise<Todo[]> {
    return this.todoService.findAll();
  }
}
