import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AtStrategy, RtStrategy } from './strategies';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities';

@Module({
  imports: [JwtModule.register({}), TypeOrmModule.forFeature([User])],
  controllers: [AuthController],
  providers: [AuthService, AtStrategy, RtStrategy],
})
export class AuthModule {}
