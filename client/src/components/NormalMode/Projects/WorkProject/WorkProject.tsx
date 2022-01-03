import { FC, useState } from 'react';
import { useOverflow } from '../../../../hooks/useOverflow';

import { IWorkProject } from '../../../../models';
import ImageGallery from '../../../ImageGallery/ImageGallery';
import Portal from '../../../Portal/Portal';

import classes from './WorkProject.module.scss';

interface ProjectProps {
  project: IWorkProject;
}

const Project: FC<ProjectProps> = ({
  project: { name, description, url, image, gallery, repository, technos },
}) => {
  const [state, setState] = useState({ isGalleryVisible: false });
  const { overflow } = useOverflow();

  const showGallery = () => {
    overflow('hidden');
    setState({ ...state, isGalleryVisible: true });
  };

  const hideGallery = () => {
    overflow('');
    setState({ ...state, isGalleryVisible: false });
  };

  return (
    <div className={classes.Project__Container}>
      <h2 className={classes.Title}>{name}</h2>
      <div className={classes.Content__Container}>
        <div className={classes.ImageContainer}>
          <img
            style={gallery?.length ? { cursor: 'pointer' } : {}}
            onClick={() => showGallery()}
            src={image}
            alt={`${name} site preview`}
          />
          {state.isGalleryVisible && gallery?.length ? (
            <Portal>
              {/*
                //TODO: carousel
              */}
              <ImageGallery hideGallery={hideGallery} gallery={gallery} />
            </Portal>
          ) : null}
        </div>
        <div className={classes.Content}>
          <p className={classes.Description}>{description}</p>
          <div className={classes.Footer}>
            <div className={classes.Links}>
              {url ? (
                <a
                  className={classes.Link}
                  href={url}
                  title="Aller sur le site"
                  target="_blank"
                  rel="noopener noreferrer">
                  Accéder au site
                </a>
              ) : null}
              {repository ? (
                <a
                  className={classes.Link}
                  href={repository}
                  title="Aller sur le dépot github"
                  target="_blank"
                  rel="noopener noreferrer">
                  Voir le dépot
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <ul className={classes.TechnosList}>
        {technos.map(({ name, logo }) => (
          <li title={name} className={classes.TechnosList__Item} key={name}>
            <img src={logo} alt={`icone ${name}`} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Project;
