import { CreateTodoDto } from './dto/create-todo.dto';
import { Repository } from 'typeorm';
import { Injectable, Inject } from '@nestjs/common';
import { Todo } from './todo.entity';

@Injectable()
export class TodosService {
  constructor(
    @Inject('TodoRepositoryToken')
    private readonly todoRepository: Repository<Todo>,
  ) {}

  async create(todo: CreateTodoDto): Promise<Todo> {
    return await this.todoRepository.create(todo);
  }

  async findAll(): Promise<Todo[]> {
    return await this.todoRepository.find();
  }
}
