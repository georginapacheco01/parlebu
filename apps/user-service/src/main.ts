import { NestFactory } from '@nestjs/core';
import { UserServiceModule } from './user-service.module';
import { Transport } from '@nestjs/microservices';
import { getNatsUrl } from 'libs/config/nats.config';

async function bootstrap() {
  const app = await NestFactory.create(UserServiceModule);
  app.connectMicroservice({
    transport: Transport.NATS,
    options: {
      servers: [getNatsUrl()],
    },
  });

  await app.startAllMicroservices();

  await app.listen(process.env.port ?? 3000);
}
bootstrap();
