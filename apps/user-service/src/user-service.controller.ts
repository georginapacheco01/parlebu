import { Controller } from '@nestjs/common';
import { UserServiceService } from './user-service.service';
import { EventPattern, Payload } from '@nestjs/microservices';
import { type CreateUserDto, USER_EVENTS } from 'libs/contracts/src';

@Controller()
export class UserServiceController {
  constructor(private readonly userServiceService: UserServiceService) {}
  
  @EventPattern(USER_EVENTS.CREATED)
  async handleUserCreated(@Payload() event: CreateUserDto) {
    console.log('Received event:', event);

    this.userServiceService.createUser(event);

    // save to DB here
  }

  @EventPattern(USER_EVENTS.FIND)
  async handleUserGet(@Payload() id: string) {
    console.log('FINDING USERING', id);

    return this.userServiceService.findUser(id);

    // save to DB here
  }
}
