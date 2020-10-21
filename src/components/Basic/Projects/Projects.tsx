import React, { FC } from 'react';
import { IWorkProject } from '../../../models';

import WorkProjectProject from './WorkProject/WorkProject';

import styles from './Projects.module.scss';
import { RouteComponentProps } from 'react-router-dom';

interface ProjectsProps extends RouteComponentProps {
  projects: IWorkProject[];
}

const Projects: FC<ProjectsProps> = ({ projects }) => {
  return (
    <section className={styles.Projects}>
      {projects.map((project: IWorkProject) => (
        <WorkProjectProject project={project} />
      ))}
    </section>
  );
};

export default Projects;
