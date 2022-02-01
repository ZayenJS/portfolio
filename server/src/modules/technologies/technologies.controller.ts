import { Controller, Get, Param, Query } from '@nestjs/common';
import { Args, Field, InputType } from '@nestjs/graphql';
import { TechnologiesService } from './technologies.service';

@Controller('technologies')
export class TechnologiesController {
  constructor(private technologyService: TechnologiesService) {}

  @Get()
  public async getTechnologies(
    @Query() { id, name }: { id?: string; name?: string },
  ) {
    console.log(id, name);

    if (id) {
      return this.technologyService.getTechnologyById(id);
    }

    if (name) {
      return this.technologyService.getTechnologyByName(name);
    }

    return this.technologyService.getTechnologies();
  }
}
