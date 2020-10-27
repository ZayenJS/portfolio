import React, { FC, useEffect } from 'react';
import { IWorkProject } from '../../../models';

import WorkProjectProject from './WorkProject/WorkProject';

import styles from './Projects.module.scss';
import { RouteComponentProps } from 'react-router-dom';
import { baseTitle } from '../../../utils';

interface ProjectsProps extends RouteComponentProps {
  projects: IWorkProject[];
}

const Projects: FC<ProjectsProps> = ({ projects }) => {
  useEffect(() => {
    document.title = `${baseTitle} - Projets`;
  }, []);

  return (
    <section className={styles.Projects}>
      {projects.map((project: IWorkProject) => (
        <WorkProjectProject project={project} />
      ))}
    </section>
  );
};

export default Projects;
