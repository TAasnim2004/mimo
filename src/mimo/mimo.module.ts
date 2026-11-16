import { Module } from '@nestjs/common';
import { MimoController } from './mimo.controller';
import { MimoService } from './mimo.service';

@Module({
  controllers: [MimoController],
  providers: [MimoService]
})
export class MimoModule {}
