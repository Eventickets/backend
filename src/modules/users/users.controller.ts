import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { GetCurrentUserId } from 'src/common/decorators';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get('/me')
  getUsers(@GetCurrentUserId() userId: number) {
    return this.userService.getUserById(userId);
  }

  // @Get('id/:id')
  // findUsersById(@Param('id', ParseIntPipe) id: number) {
  //   return this.userService.findUsersById(id);
  // }
}
