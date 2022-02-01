import * as fsp from 'fs/promises';
import { Injectable } from '@nestjs/common';
import slugify from 'slugify';

import { Project } from 'src/models/Project';
import { Technology } from 'src/models/Technology';
import { getTechnologies, getProjects } from './data';

@Injectable()
export class FixturesService {
  public async createTechnologies(imagesPath: string) {
    console.log('Loading Technologies...');

    const technologies = getTechnologies(imagesPath);

    try {
      for (const technology of technologies) {
        const createdTechnology = Technology.create(technology);
        createdTechnology.save();

        console.log(`Created technology: ${createdTechnology.name}`);
      }

      console.log('Finished loading Technologies.');
      return technologies;
    } catch (e) {
      console.error(e);
      return null;
    }
  }

  public async createProjects(imagesPath: string) {
    try {
      const projects = getProjects();
      const createdProjects = [];

      for (const project of projects) {
        console.log(`Creating project: ${project.name}`);

        const projectDir = `${process.cwd()}/public/images/projects/${slugify(
          project.name,
          {
            lower: true,
          },
        )}`;

        try {
          await fsp.opendir(projectDir);
        } catch (e) {
          await fsp.mkdir(projectDir, { recursive: true });
        }

        const technologies: Technology[] = [];

        for (const technology of project.technologies) {
          const technologyModel = await Technology.findOne({
            where: { name: technology },
          });

          if (technologyModel) {
            technologies.push(technologyModel);
          }
        }

        const newProject = Project.create({
          name: project.name,
          description: project.description,
          url: project.url,
          repository: project.repository,
          technologies,
        });

        const createdProject = await newProject.save();

        // add images to the project
        const projectImagePath = `${imagesPath}/${slugify(project.name, {
          lower: true,
        })}`;

        console.log(`Created project: ${createdProject.name}`);
        createdProjects.push(newProject);
      }

      console.log('Finished loading Projects.');
      return createdProjects;
    } catch (e) {
      console.error(e);
      return null;
    }
  }
}
