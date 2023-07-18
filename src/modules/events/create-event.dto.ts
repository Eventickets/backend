import { IsDate, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class createEventDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  name: string;

  @IsNotEmpty()
  @IsDate()
  start_date: Date;

  @IsNotEmpty()
  @IsDate()
  end_date: Date;
}
