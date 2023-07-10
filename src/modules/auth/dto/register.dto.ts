import { Transform } from 'class-transformer';
import { IsBoolean, IsEmail, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class RegisterDto {
  @IsNotEmpty()
  @IsEmail()
  @MaxLength(100)
  mail: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsBoolean()
  @Transform(({ value }) => value === 'true')
  accept_terms_and_conditions: boolean;

  @IsNotEmpty()
  @IsBoolean()
  allow_sending_emails: false;

  @MaxLength(45)
  @IsString()
  instagram: string;

  @MaxLength(45)
  @IsString()
  twitter: string;
}
