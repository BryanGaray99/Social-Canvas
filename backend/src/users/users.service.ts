import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './users.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  createUser(UserEntity: CreateUserDto) {
    const newUser = this.userRepository.create(UserEntity);
    return this.userRepository
      .save(newUser)
      .catch((err) => this.catchQueryError(err));
  }

  async getUserById(id) {
    return this.userRepository.findOneBy({ id: id });
  }

  async updateUser(id, data: CreateUserDto) {
    const user = await this.getUserById(id);

    if (!user)
      return new HttpException('No existe el usuario', HttpStatus.NOT_FOUND);

    await this.userRepository
      .update(id, { ...data })
      .catch((err) => this.catchQueryError(err));

    const userUpdated = await this.getUserById(id);

    return {
      message: 'Usuario actualizado',
      userUpdated,
    };
  }

  async deleteUser(id) {
    const user = await this.getUserById(id);

    if (!user)
      return new HttpException('No existe el usuario', HttpStatus.NOT_FOUND);

    await this.userRepository
      .update(id, { isActive: false })
      .catch((err) => this.catchQueryError(err));

    const userUpdated = await this.getUserById(id);

    return {
      message: 'Usuario eliminado',
      userUpdated,
    };
  }

  async loginUser(LoginUser: LoginUserDto) {
    const user = await this.userRepository.findOneBy({
      email: LoginUser.email,
      password: LoginUser.password,
      isActive: true,
    });

    if (!user)
      return new HttpException(
        'Usuario o contraseña invalida',
        HttpStatus.NOT_FOUND,
      );

    return user;
  }

  getUsers() {
    return this.userRepository.find();
  }

  async getUserByPhone(phone: string): Promise<UserEntity | undefined> {
    return this.userRepository.findOneBy({ phone });
  }

  catchQueryError(err) {
    switch (err.name) {
      case 'QueryFailedError':
        throw new Error('Error, ' + err.message);
      default:
        throw err;
    }
  }
}
