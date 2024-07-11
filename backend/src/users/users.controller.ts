import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Delete,
  Param,
  UseFilters,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { HttpExceptionFilter } from '../http-exception.filter';
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  findAll() {
    return this.userService.getUsers();
  }

  @Get(':phone')
  async getUserByPhone(@Param('phone') phone: string) {
    const user = await this.userService.getUserByPhone(phone);
    if (!user) {
      throw new HttpException('Usuario no encontrado', HttpStatus.NOT_FOUND);
    }
    return user;
  }

  @Post('create')
  @UseFilters(new HttpExceptionFilter())
  createUser(@Body() newUser: CreateUserDto) {
    return this.userService.createUser(newUser).catch((err) => {
      throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
    });
  }

  @Post('login')
  async loginUser(@Body() loginUser: LoginUserDto) {
    try {
      const user = await this.userService.loginUser(loginUser);
      return user; // Devuelve el usuario autenticado completo en un objeto.
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  @Put('update/:id')
  @UseFilters(new HttpExceptionFilter())
  updateUser(@Param('id') id: number, @Body() newUser: CreateUserDto) {
    return this.userService.updateUser(id, newUser).catch((err) => {
      throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
    });
  }

  @Delete('delete/:id')
  @UseFilters(new HttpExceptionFilter())
  deleteUser(@Param('id') id: number) {
    return this.userService.deleteUser(id).catch((err) => {
      throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
    });
  }
}
