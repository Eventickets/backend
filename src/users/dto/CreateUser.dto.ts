import { IsBoolean, IsEmail, IsNotEmpty, MaxLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsEmail()
  @MaxLength(100)
  mail: string;

  @IsNotEmpty()
  @IsBoolean()
  accept_terms_and_conditions: boolean;

  @IsNotEmpty()
  @IsBoolean()
  allow_sending_emails: false;

  @MaxLength(45)
  instagram: string;

  @MaxLength(45)
  twitter: string;
}
