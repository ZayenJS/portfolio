import { Args, Query, Resolver } from '@nestjs/graphql';
import { Project } from 'src/models/Project';
import { ProjectsService } from './projects.service';

@Resolver()
export class ProjectsResolver {
  constructor(private projectService: ProjectsService) {}

  @Query(() => [Project])
  public async getProjects() {
    return this.projectService.getProjects();
  }

  @Query(() => Project)
  public async getProjectById(@Args('id') id: string) {
    return this.projectService.getProjectById(id);
  }
}
