import React, { FC } from 'react';
import { IWorkProject } from '../../../models';

import WorkProjectProject from './WorkProject/WorkProject';

import styles from './Projects.module.scss';
import { RouteComponentProps } from 'react-router-dom';
import { baseTitle } from '../../../utils';
import { Helmet } from 'react-helmet';

interface ProjectsProps extends RouteComponentProps {
  projects: IWorkProject[];
}

const Projects: FC<ProjectsProps> = ({ projects }) => {
  return (
    <>
      <Helmet>
        <title>{baseTitle} - Projets</title>
      </Helmet>
      <section className={styles.Projects}>
        {projects.map((project: IWorkProject) => (
          <WorkProjectProject key={project.name} project={project} />
        ))}
      </section>
    </>
  );
};

export default Projects;
