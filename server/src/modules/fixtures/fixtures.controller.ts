import { Controller, Post, Req } from '@nestjs/common';
import { FixturesService } from './fixtures.service';

@Controller('fixtures')
export class FixturesController {
  constructor(private fixturesService: FixturesService) {}

  @Post('/technologies')
  public async loadTechnologies(@Req() req) {
    const imagesPath = `${req.protocol}://${req.get(
      'host',
    )}/images/technologies`;
    return this.fixturesService.createTechnologies(imagesPath);
  }

  @Post('/projects')
  public async loadProjects(@Req() req) {
    const imagesPath = {
      basePath: `${req.protocol}://${req.get('host')}`,
      fullpath: `${req.protocol}://${req.get('host')}/images/projects`,
      pathname: `images/projects`,
    };

    return this.fixturesService.createProjects(imagesPath);
  }
}
