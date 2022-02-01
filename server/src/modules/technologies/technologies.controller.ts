import { Controller, Get } from '@nestjs/common';
import { TechnologiesService } from './technologies.service';

@Controller('technologies')
export class TechnologiesController {
  constructor(private technologyService: TechnologiesService) {}

  @Get()
  public async getTechnologies() {
    return this.technologyService.getTechnologies();
  }
}
