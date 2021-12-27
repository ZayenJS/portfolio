import { Module } from '@nestjs/common';
import { TechnologiesResolver } from './technologies.resolver';
import { TechnologiesService } from './technologies.service';

@Module({
  providers: [TechnologiesResolver, TechnologiesService]
})
export class TechnologiesModule {}
