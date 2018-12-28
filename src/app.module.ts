import { LoggerMiddleware } from './middleware/logger.middleware';
import { TodoModule } from './todos/todo.module';
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [TodoModule, DatabaseModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('todos');
  }
}
