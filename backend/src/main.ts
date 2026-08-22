import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

let app;

async function bootstrap() {
  if (!app) {
    app = await NestFactory.create(AppModule);

    app.enableCors({
      origin: [
        "http://localhost:5173",
        "https://https://cv-interactif-xeno.vercel.app"
      ],
    });

    await app.init();
  }

  return app.getHttpAdapter().getInstance();
}

export default bootstrap();