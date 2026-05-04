import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { EventBusService } from '@app/event-bus';
import { type CreateUserDto, USER_EVENTS } from 'libs/contracts/src';

@Controller('users')
export class UsersController {
  constructor(private readonly eventBus: EventBusService) {}

  @Post()
  createUser(@Body() body: CreateUserDto) {
    console.log
    this.eventBus.emit(USER_EVENTS.CREATED, body);

    return {
      status: 'queued',
      message: 'User creation event sent',
    };
  }

  @Get('/users/:id')
  getUser(@Param() id: string) {
    console.log("FINDING USERS")
    this.eventBus.emit(USER_EVENTS.FIND, id);
    return {
      status: 'return',
      message: 'Found Users',
    };
  }
}