import { Controller, Get, Param } from '@nestjs/common';
import { ProjectsService } from './projects.service';

@Controller('projects')
export class ProjectsController {
  constructor(private projectService: ProjectsService) {}

  @Get()
  public async getProjects() {
    return this.projectService.getProjects();
  }

  @Get('/:id')
  public async getProjectById(@Param('id') id: string) {
    return this.projectService.getProjectById(id);
  }
}
