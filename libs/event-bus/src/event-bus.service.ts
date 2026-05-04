import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class EventBusService {
  constructor(@Inject('EVENT_BUS') private client: ClientProxy) {}

  emit<T>(pattern: string, data: T) {
    return this.client.emit(pattern, data);
  }
}
