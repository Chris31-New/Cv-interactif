import { NestFactory } from "@nestjs/core";
import { AppModule } from "../src/app.module";

let app: any;

async function createApp() {
  if (!app) {
    app = await NestFactory.create(AppModule);

    app.enableCors({
      origin: true,
      methods: ["GET", "POST", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization"],
    });

    await app.init();
  }

  return app.getHttpAdapter().getInstance();
}

export default async function handler(req: any, res: any) {
  const server = await createApp();
  return server(req, res);
}