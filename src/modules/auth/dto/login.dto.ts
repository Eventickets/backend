import { IsEmail, IsNotEmpty, IsString, MaxLength } from "class-validator";

export class LoginDto {
    @IsNotEmpty()
    @IsEmail()
    @MaxLength(100)
    mail: string;

    @IsNotEmpty()
    @IsString()
    password: string;
  }
  