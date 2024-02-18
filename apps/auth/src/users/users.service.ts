import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreateUserDto } from './dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async createUser(createUserDto: CreateUserDto) {
    // const newUser = this.prisma.user.create({
    //   data: {
    //     email: createUserDto.email,
    //     hash,
    //   },
    // });
  }
}
