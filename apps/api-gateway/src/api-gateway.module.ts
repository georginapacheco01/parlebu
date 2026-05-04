import { Module } from '@nestjs/common';
import { ApiGatewayController } from './api-gateway.controller';
import { ApiGatewayService } from './api-gateway.service';
import { EventBusModule } from '@app/event-bus';
import { UsersController } from './controllers/user.controller';

@Module({
  imports: [EventBusModule],
  controllers: [ApiGatewayController, UsersController],
  providers: [ApiGatewayService],
})
export class ApiGatewayModule {}
