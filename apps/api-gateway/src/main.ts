import { NestFactory } from '@nestjs/core';
import { ApiGatewayModule } from './api-gateway.module';
import { Transport } from '@nestjs/microservices';
import { getNatsUrl } from 'libs/config/nats.config';

async function bootstrap() {
  const app = await NestFactory.create(ApiGatewayModule);

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
