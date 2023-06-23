import { CardDto } from './card.dto';
import { IsDefined, IsNotEmpty, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateChargeDto {
  @IsDefined()
  @IsNotEmpty()
  @Type(() => CardDto)
  card: CardDto;

  @IsNumber()
  amount: number;
}
