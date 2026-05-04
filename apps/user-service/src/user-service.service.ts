import { EventBusService } from '@app/event-bus';
import { Injectable } from '@nestjs/common';
import { CreateUserDto, USER_EVENTS } from 'libs/contracts/src';

@Injectable()
export class UserServiceService {
  constructor(private eventBus: EventBusService) {}

  findUser(id): string {
    return 'Here is ur user mama!' + id;
  }

  createUser(dto: CreateUserDto) {
    const user = { id: '123', ...dto };

    this.eventBus.emit(USER_EVENTS.CREATED, {
      userId: user.id,
      email: user.email,
    });

    return user;
  }
}
