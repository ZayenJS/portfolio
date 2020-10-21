import React, { FC } from 'react';
import { IWorkProject } from '../../../../models';

import styles from './WorkProject.module.scss';

interface ProjectProps {
  project: IWorkProject;
}

const Project: FC<ProjectProps> = ({
  project: { name, description, url, image, repository, technos },
}) => {
  return (
    <div className={styles.Project}>
      <div>
        <h2 className={styles.Project__Name}>{name}</h2>
        <div className={styles.Project__ImageContainer}>
          <img src={image} alt={`${name} site preview`} />
        </div>
        <p className={styles.Project__Description}>{description}</p>
        {url ? (
          <a
            className={styles.Project__Link}
            href={url}
            title="Aller sur le site"
            target="_blank"
            rel="noopener noreferrer">
            {url}
          </a>
        ) : (
          <p>Pas en ligne pour le moment...</p>
        )}
        {repository ? (
          <a
            className={styles.Project__Link}
            href={repository}
            title="Aller sur le repo github"
            target="_blank"
            rel="noopener noreferrer">
            {repository}
          </a>
        ) : null}
      </div>
      <div>
        <ul className={styles.Project__TechnosList}>
          {technos.map(({ name, logo }) => (
            <li title={name} className={styles.Project__TechnosList__Item} key={name}>
              <img src={logo} alt={`icone ${name}`} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// <a href="https://iconscout.com/icon/javascript" target="_blank">Javascript Icon</a> by <a href="https://iconscout.com/contributors/icon-mafia">Icon Mafia</a> on <a href="https://iconscout.com">Iconscout</a>
// <a href="https://iconscout.com/icon/typescript" target="_blank">Typescript Icon</a> by <a href="https://iconscout.com/contributors/icon-mafia">Icon Mafia</a> on <a href="https://iconscout.com">Iconscout</a>
// <a href="https://iconscout.com/icon/react-3" target="_blank">React Icon</a> by <a href="https://iconscout.com/contributors/icon-mafia">Icon Mafia</a> on <a href="https://iconscout.com">Iconscout</a>
// <a href="https://iconscout.com/icon/redux" target="_blank">Redux Icon</a> by <a href="https://iconscout.com/contributors/icon-mafia">Icon Mafia</a> on <a href="https://iconscout.com">Iconscout</a>
// <a href="https://iconscout.com/icons/nodejs" target="_blank">Nodejs Icon</a> by <a href="https://iconscout.com/contributors/icon-mafia">Icon Mafia</a> on <a href="https://iconscout.com">Iconscout</a>
// <a href="https://iconscout.com/icons/css" target="_blank">Css Logo Icon</a> by <a href="https://iconscout.com/contributors/pixel-icons">Pixel Icons</a> on <a href="https://iconscout.com">Iconscout</a>
// <a href="https://iconscout.com/icon/sass" target="_blank">Sass Icon</a> by <a href="https://iconscout.com/contributors/icon-mafia" target="_blank">Icon Mafia</a>
// <a href="https://iconscout.com/icons/postgresql" target="_blank">Postgresql Icon</a> by <a href="https://iconscout.com/contributors/icon-mafia" target="_blank">Icon Mafia</a>

export default Project;
