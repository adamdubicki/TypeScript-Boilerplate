import { TodosController } from './todos.controller';
import { Module } from '@nestjs/common';
import { TodoProviders } from './todo.providers';
import { TodosService } from './todos.service';

@Module({
  controllers: [TodosController],
  providers: [...TodoProviders, TodosService],
})
export class TodoModule {}
