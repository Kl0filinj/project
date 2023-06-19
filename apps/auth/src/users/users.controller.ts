import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { CurrentUser } from '../current-user.decorator';
import { UserDocument } from './models/users.schema';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() createuserDto: CreateUserDto) {
    return this.usersService.create(createuserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async getUser(@CurrentUser() user: UserDocument) {
    return user;
  }
}
