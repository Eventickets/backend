import { User } from '@entities/user.entity';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegisterDto } from './dto/register.dto';
import * as argon from 'argon2';
import { JwtPayload, Tokens } from './types';
import { LoginDto } from './dto/login.dto';
import { Not } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private jwtService: JwtService,
    private config: ConfigService,
  ) {}

  async register(newUser: RegisterDto) {
    const foundUser = await this.userRepository.findOne({
      where: { mail: newUser.mail },
    });

    if (foundUser) throw new ForbiddenException('User exists');

    const password = await argon.hash(newUser.password);
    const savedUser = this.userRepository.create({
      ...newUser,
      password,
      refresh_token: '',
    });
    const tokens = await this.getTokens(savedUser.id, savedUser.mail);
    const createdUser = await this.userRepository.save(savedUser);
    await this.updateRtHash(createdUser.id, tokens.refresh_token);
    return tokens;
  }

  async login(user: LoginDto) {
    const foundUser = await this.userRepository.findOne({
      where: { mail: user.mail },
    });

    if (!foundUser) throw new ForbiddenException('User not found');

    const isPasswordValid = await argon.verify(
      foundUser.password,
      user.password,
    );

    if (!isPasswordValid) throw new Error('Invalid password');

    const tokens = await this.getTokens(foundUser.id, foundUser.mail);
    await this.updateRtHash(foundUser.id, tokens.refresh_token);
    return tokens;
  }

  async logout(userId: number): Promise<boolean> {
    await this.userRepository.update(
      {
        id: userId,
        refresh_token: Not(''),
      },
      {
        refresh_token: '',
      },
    );
    return true;
  }

  async refreshTokens(userId: number, rt: string): Promise<Tokens> {
    const foundUser = await this.userRepository.findOne({
      where: { id: userId },
    });

    if (!foundUser || !foundUser.refresh_token)
      throw new ForbiddenException('Access Denied');

    const isRtValid = await argon.verify(foundUser.refresh_token, rt);

    if (!isRtValid) throw new Error('Invalid refresh token');

    const tokens = await this.getTokens(foundUser.id, foundUser.mail);
    await this.updateRtHash(foundUser.id, tokens.refresh_token);
    return tokens;
  }

  async updateRtHash(userId: number, rt: string): Promise<void> {
    const hash = await argon.hash(rt);
    await this.userRepository.update(userId, { refresh_token: hash });
  }

  async getTokens(userId: number, email: string): Promise<Tokens> {
    const jwtPayload: JwtPayload = {
      sub: userId,
      email: email,
    };

    const [at, rt] = await Promise.all([
      this.jwtService.signAsync(jwtPayload, {
        secret: this.config.get<string>('AT_SECRET'),
        expiresIn: this.config.get<string>('AT_EXPIRES_IN'),
      }),
      this.jwtService.signAsync(jwtPayload, {
        secret: this.config.get<string>('RT_SECRET'),
        expiresIn: this.config.get<string>('RT_EXPIRES_IN'),
      }),
    ]);

    return {
      access_token: at,
      refresh_token: rt,
    };
  }
}
