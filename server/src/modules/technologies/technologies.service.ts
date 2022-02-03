import { Injectable } from '@nestjs/common';
import { Technology } from 'src/models/Technology';

@Injectable()
export class TechnologiesService {
  public async getTechnologies(all: boolean = false) {
    if (all) {
      return Technology.find();
    }

    return (
      await Technology.find({
        relations: ['projects'],
      })
    ).filter((technology) => technology.projects.length);
  }

  public async getTechnologyById(id: string) {
    return Technology.findOne({ where: { id } });
  }

  public async getTechnologyByName(name: string) {
    return Technology.findOne({ where: { name } });
  }
}
