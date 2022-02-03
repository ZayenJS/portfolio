import { FC, useState } from 'react';
import { motion } from 'framer-motion';
import { IWorkProject, Technos } from '../../../models';

import WorkProjectProject from './WorkProject/WorkProject';

import classes from './Projects.module.scss';
import { RouteComponentProps } from 'react-router-dom';
import { baseTitle } from '../../../utils';
import { Helmet } from 'react-helmet';
import { pageTransition } from '../../../constants/framer-motion';
import { Technology } from '../../../models/Technology';
import { useScrollToTop } from '../../../hooks/useScrollToTop';
import { useProjects } from '../../../hooks/useProjects';
import { useTechnologies } from '../../../hooks/useTechnologies';

interface ProjectsProps extends RouteComponentProps {
  projects: IWorkProject[];
}

interface ProjectsState {
  filter: Technos[];
}

const Projects: FC<ProjectsProps> = () => {
  const [state, setState] = useState<ProjectsState>({ filter: [] });
  useScrollToTop();
  const { projects, error: projectError } = useProjects();
  const { technologies, error: technologiesError } = useTechnologies();

  const setFilter = (tech: Technos) => {
    const alreadyPresent = state.filter.find((el) => el === tech);

    setState((ps) => ({
      ...ps,
      filter: alreadyPresent ? state.filter.filter((el) => el !== tech) : [...state.filter, tech],
    }));
  };

  const filteredProjects = projects.filter((project) => {
    if (!state.filter.length) return true;

    for (const tech of project.technologies) {
      if (state.filter.find((el) => el === tech.name)) {
        return true;
      }
    }

    return false;
  });

  return !technologiesError && !projectError ? (
    <>
      <Helmet>
        <title>{baseTitle} - Projets</title>
      </Helmet>
      <motion.section
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageTransition}
        className={classes.Container}>
        <form className={classes.Filter}>
          <h2>Filtrer par techno</h2>
          <ul>
            {technologies.map((tech) => (
              <li key={tech.name}>
                <button
                  type="button"
                  onClick={() => setFilter(tech.name)}
                  className={state.filter.includes(tech.name) ? classes.Active : ''}>
                  <img key={tech.id} src={tech.iconUrl} alt="" />
                </button>
              </li>
            ))}
          </ul>
        </form>
        <div className={classes.Content}>
          {projects.length && !projectError ? (
            filteredProjects.map((project) => (
              <WorkProjectProject key={project.name} project={project} />
            ))
          ) : (
            <div>loading...</div>
          )}
        </div>
      </motion.section>
    </>
  ) : (
    <div>Message d'erreur...</div>
  );
};

export default Projects;
