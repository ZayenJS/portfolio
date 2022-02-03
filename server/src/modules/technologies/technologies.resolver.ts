import { Args, Query, Resolver } from '@nestjs/graphql';
import { Technology } from 'src/models/Technology';
import { TechnologiesService } from './technologies.service';

@Resolver()
export class TechnologiesResolver {
  constructor(private technologyService: TechnologiesService) {}

  @Query(() => [Technology])
  public async getTechnologies(@Args('all') all: boolean) {
    return this.technologyService.getTechnologies(all);
  }

  @Query(() => Technology)
  public async getTechnologyById(@Args('id') id: string) {
    return this.technologyService.getTechnologyById(id);
  }

  @Query(() => Technology)
  public async getTechnologyByName(@Args('name') name: string) {
    return this.technologyService.getTechnologyByName(name);
  }
}
