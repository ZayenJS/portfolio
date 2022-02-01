import { Module } from '@nestjs/common';
import { TechnologiesResolver } from './technologies.resolver';
import { TechnologiesService } from './technologies.service';
import { TechnologiesController } from './technologies.controller';

@Module({
  providers: [TechnologiesResolver, TechnologiesService],
  controllers: [TechnologiesController]
})
export class TechnologiesModule {}
