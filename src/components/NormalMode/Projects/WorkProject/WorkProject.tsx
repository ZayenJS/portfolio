import React, { FC, useState } from 'react';
import Tilt from 'react-parallax-tilt';

import { IWorkProject } from '../../../../models';
import ImageGallery from '../../../ImageGallery/ImageGallery';
import Portal from '../../../Portal/Portal';

import styles from './WorkProject.module.scss';

interface ProjectProps {
  project: IWorkProject;
}

const Project: FC<ProjectProps> = ({
  project: { name, description, url, image, gallery, repository, technos },
}) => {
  const [state, setState] = useState({ isGalleryVisible: false });
  const showGallery = () => {
    setState({ ...state, isGalleryVisible: true });
  };

  return (
    <>
      <div className={styles.Project__Container}>
        <Tilt tiltMaxAngleX={2} tiltMaxAngleY={1}>
          <div className={styles.Project}>
            <h2 className={styles.Title}>{name}</h2>
            <div className={styles.Content__Container}>
              <div className={styles.ImageContainer}>
                <img
                  style={gallery?.length ? { cursor: 'pointer' } : {}}
                  onClick={() => showGallery()}
                  src={image}
                  alt={`${name} site preview`}
                />
                {state.isGalleryVisible && gallery?.length ? (
                  <Portal>
                    <ImageGallery
                      hideGallery={() => setState({ ...state, isGalleryVisible: false })}
                      gallery={gallery}
                    />
                  </Portal>
                ) : null}
              </div>
              <div className={styles.Content}>
                <div className={styles.Description__Container}>
                  <p className={styles.Description}>{description}</p>
                  <div className={styles.Links}>
                    {url ? (
                      <a
                        className={styles.Link}
                        href={url}
                        title="Aller sur le site"
                        target="_blank"
                        rel="noopener noreferrer">
                        Accéder au site
                      </a>
                    ) : null}
                    {repository ? (
                      <a
                        className={styles.Link}
                        href={repository}
                        title="Aller sur le repo github"
                        target="_blank"
                        rel="noopener noreferrer">
                        Voir le repo sur GitHub
                      </a>
                    ) : null}
                  </div>
                </div>
                <ul className={styles.TechnosList}>
                  {technos.map(({ name, logo }) => (
                    <li title={name} className={styles.TechnosList__Item} key={name}>
                      <img src={logo} alt={`icone ${name}`} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Tilt>
      </div>
    </>
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
