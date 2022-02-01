import { Injectable } from '@nestjs/common';
import { Technology } from 'src/models/Technology';

@Injectable()
export class TechnologiesService {
  public async getTechnologies() {
    return Technology.find();
  }
}
