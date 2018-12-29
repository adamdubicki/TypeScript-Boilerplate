import { AllExceptionFilter } from './shared/filter/all-exception.filter';
import { NestFactory, HTTP_SERVER_REF } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const port = 8000;
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Todo Example')
    .setDescription('The Todo API description')
    .setVersion('1.0')
    .addTag('todos')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  /**
   * Apply global exception filter
   */
  const httpRef = app.get(HTTP_SERVER_REF);
  app.useGlobalFilters(new AllExceptionFilter(httpRef));

  /**
   * Start the application
   */
  await app.listen(port);
  console.log(`Listening on port ${port}`);
}
bootstrap();
