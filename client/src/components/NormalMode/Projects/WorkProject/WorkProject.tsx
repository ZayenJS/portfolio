import { FC, useState } from 'react';

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
    <div className={styles.Project__Container}>
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
          <p className={styles.Description}>{description}</p>
          <div className={styles.Footer}>
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
                  title="Aller sur le dépot github"
                  target="_blank"
                  rel="noopener noreferrer">
                  Voir le dépot
                </a>
              ) : null}
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
    </div>
  );
};

export default Project;
