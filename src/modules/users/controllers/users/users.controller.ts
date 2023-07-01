import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from '../../services/users/users.service';
import { CreateUserDto } from '../../dto/CreateUser.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  // @Get('id/:id')
  // findUsersById(@Param('id', ParseIntPipe) id: number) {
  //   return this.userService.findUsersById(id);
  // }

  @Post('create')
  createUsers(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }
}
