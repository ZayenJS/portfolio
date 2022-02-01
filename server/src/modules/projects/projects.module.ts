import { Module } from '@nestjs/common';
import { ProjectsResolver } from './projects.resolver';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';

@Module({
  providers: [ProjectsResolver, ProjectsService],
  controllers: [ProjectsController]
})
export class ProjectsModule {}
