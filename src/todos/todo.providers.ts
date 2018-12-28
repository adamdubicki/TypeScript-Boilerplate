import { Connection } from 'typeorm';
import { Todo } from './todo.entity';
import { TodosService } from './todos.service';

export const TodoProviders = [
  {
    provide: 'TodoRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(Todo),
    inject: ['DbConnectionToken'],
  },
];
