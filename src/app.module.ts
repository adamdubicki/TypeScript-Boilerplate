import { LoggerMiddleware } from './shared/middleware/logger.middleware';
import { TodoModule } from './todos/todo.module';
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: <string>process.env.PGHOST,
      port: <number>(process.env.PGPORT as unknown),
      username: <string>process.env.PGUSER,
      password: <string>process.env.PGPASSWORD,
      database: <string>process.env.PGDATABASE,
      entities: ["src/**/**.entity{.ts,.js}"],
      synchronize: true,
    }), 
    TodoModule
  ],
})
export class AppModule implements NestModule {
  constructor(private readonly connection: Connection) {}

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('todos');
  }
}
