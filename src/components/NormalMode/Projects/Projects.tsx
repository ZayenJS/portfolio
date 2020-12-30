import React, { FC } from 'react';
import { motion } from 'framer-motion';
import { IWorkProject } from '../../../models';

import WorkProjectProject from './WorkProject/WorkProject';

import styles from './Projects.module.scss';
import { RouteComponentProps } from 'react-router-dom';
import { baseTitle } from '../../../utils';
import { Helmet } from 'react-helmet';
import { pageTransition } from '../../../constants/framer-motion';

interface ProjectsProps extends RouteComponentProps {
  projects: IWorkProject[];
}

const Projects: FC<ProjectsProps> = ({ projects }) => {
  return (
    <>
      <Helmet>
        <title>{baseTitle} - Projets</title>
      </Helmet>
      <motion.section
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageTransition}
        className={styles.Projects}>
        {projects.map((project: IWorkProject) => (
          <WorkProjectProject key={project.name} project={project} />
        ))}
      </motion.section>
    </>
  );
};

export default Projects;
