import { Module } from '@nestjs/common';
import { EventBusService } from './event-bus.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { getNatsUrl } from 'libs/config/nats.config';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'EVENT_BUS',
        transport: Transport.NATS,
        options: {
          servers: [getNatsUrl()],
        },
      },
    ]),
  ],
  providers: [EventBusService],
  exports: [EventBusService],
})
export class EventBusModule {}
