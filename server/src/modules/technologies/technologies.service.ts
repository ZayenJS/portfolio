import { Injectable } from '@nestjs/common';
import { Technology } from 'src/models/Technology';

@Injectable()
export class TechnologiesService {
  public async getTechnologies() {
    return Technology.find();
  }

  public async getTechnologyById(id: string) {
    return Technology.findOne({ where: { id } });
  }

  public async getTechnologyByName(name: string) {
    return Technology.findOne({ where: { name } });
  }
}
