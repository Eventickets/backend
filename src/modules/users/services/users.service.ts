import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async getUserById(id: number) {
    const foundUser = await this.userRepository.findOne({
      where: { id },
      select: ['mail', 'allow_sending_emails', 'instagram', 'twitter'],
    });

    if (!foundUser) throw new ForbiddenException('User not found');

    return foundUser;
  }
}
