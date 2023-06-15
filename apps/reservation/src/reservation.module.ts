import { Module } from '@nestjs/common';
import { ReservationController } from './reservation.controller';
import { ReservationService } from './reservation.service';
import { DatabaseModule } from '@app/common/database';
import { ReservationModule } from './reservation/reservation.module';

@Module({
  imports: [DatabaseModule, ReservationModule],
  controllers: [ReservationController],
  providers: [ReservationService],
})
export class ReservationModule {}
