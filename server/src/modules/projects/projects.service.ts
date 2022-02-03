import { Injectable } from '@nestjs/common';
import { Project } from 'src/models/Project';

@Injectable()
export class ProjectsService {
  public async getProjects() {
    return Project.find({
      relations: ['technologies', 'images'],
      order: { id: 'ASC' },
    });
  }

  public async getProjectById(id: string) {
    return Project.findOne({
      where: { id },
      relations: ['technologies', 'images'],
    });
  }
}
