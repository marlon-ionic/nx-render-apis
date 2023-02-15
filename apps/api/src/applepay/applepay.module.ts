import { Module } from '@nestjs/common';
import { ApplepayController } from './applepay.controller';
import { ApplepayService } from './applepay.service';

@Module({
  controllers: [ApplepayController],
  providers: [ApplepayService],
})
export class ApplepayModule {}
