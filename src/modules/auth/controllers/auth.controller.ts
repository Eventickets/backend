import { Body, Controller, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { RegisterDto } from '../dto/register.dto';
import { Tokens } from '../types';
import { GetCurrentUser, GetCurrentUserId, Public } from 'src/common/decorators';
import { LoginDto } from '../dto/login.dto';
import { RtGuard } from 'src/common/guards';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Public()
    @Post('register')
    @HttpCode(HttpStatus.CREATED)
    async register(@Body() newUser: RegisterDto): Promise<Tokens> {
        return this.authService.register(newUser);
    }

    @Public()
    @Post('login')
    @HttpCode(HttpStatus.OK)
    async login(@Body() login: LoginDto): Promise<Tokens> {
        return this.authService.login(login);
    }

    @Post('logout')
    @HttpCode(HttpStatus.OK)
    logout(@GetCurrentUserId() userId: number): Promise<boolean> {
        return this.authService.logout(userId);
    }

    @Public()
    @UseGuards(RtGuard)
    @Post('refresh')
    @HttpCode(HttpStatus.OK)
    refreshTokens(
      @GetCurrentUserId() userId: number,
      @GetCurrentUser('refreshToken') refreshToken: string,
    ): Promise<Tokens> {
      console.log('id', userId);
      console.log('refreshToken', refreshToken);
      return this.authService.refreshTokens(userId, refreshToken);
    }
}
