import { Query, Resolver } from '@nestjs/graphql';
import { Technology } from 'src/models/Technology';
import { TechnologiesService } from './technologies.service';

@Resolver()
export class TechnologiesResolver {
  constructor(private technologyService: TechnologiesService) {}

  @Query(() => [Technology])
  public async getTechnologies() {
    return this.technologyService.getTechnologies();
  }
}
