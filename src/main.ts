import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BadRequestException, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: { enableImplicitConversion: true },
      exceptionFactory: (e) => {
        console.error(e);
        throw new BadRequestException(e);
      },
    }),
  );
  await app.listen(3000);
}
bootstrap();
