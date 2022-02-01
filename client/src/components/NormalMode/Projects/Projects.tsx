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

interface ProjectsProps extends RouteComponentProps {
  projects: IWorkProject[];
}

interface ProjectsState {
  filter: Technos[];
}

const Projects: FC<ProjectsProps> = ({ projects }) => {
  const [state, setState] = useState<ProjectsState>({ filter: [] });
  useScrollToTop();

  //  TODO: load technos from backend && implement CRUD for technos
  const technos = [
    new Technology(1, Technos.HTML),
    new Technology(2, Technos.CSS),
    new Technology(3, Technos.JAVASCRIPT),
    new Technology(4, Technos.TYPESCRIPT),
    new Technology(5, Technos.REACT),
    new Technology(6, Technos.REDUX),
    new Technology(7, Technos.SASS),
    new Technology(8, Technos.NODE_JS),
    new Technology(9, Technos.NEST_JS),
    new Technology(10, Technos.PHP),
    new Technology(11, Technos.SYMFONY),
    new Technology(12, Technos.GRAPHQL),
  ];

  const setFilter = (tech: Technos) => {
    const alreadyPresent = state.filter.find((el) => el === tech);

    setState((ps) => ({
      ...ps,
      filter: alreadyPresent ? state.filter.filter((el) => el !== tech) : [...state.filter, tech],
    }));
  };

  const filteredProjects = projects.filter((project) => {
    if (!state.filter.length) return true;

    for (const tech of project.technos) {
      if (state.filter.find((el) => el === tech.name)) {
        return true;
      }
    }

    return false;
  });

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
        className={classes.Container}>
        <form className={classes.Filter}>
          <h2>Filtrer par techno</h2>
          <ul>
            {technos.map((tech) => (
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
          {filteredProjects.map((project: IWorkProject) => (
            <WorkProjectProject key={project.name} project={project} />
          ))}
        </div>
      </motion.section>
    </>
  );
};

export default Projects;
