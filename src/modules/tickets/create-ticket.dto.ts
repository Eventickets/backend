import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class createTicketDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  description: string;

  @IsNotEmpty()
  @IsNumber()
  event_id: number;

  @IsNotEmpty()
  @IsNumber()
  quantity: number;

  @IsNotEmpty()
  @IsNumber()
  unit_price: number;
}
