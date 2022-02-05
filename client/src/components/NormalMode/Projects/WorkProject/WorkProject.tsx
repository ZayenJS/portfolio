import { FC, useState } from 'react';
import { useOverflow } from '../../../../hooks/useOverflow';

import { Project as ProjectModel } from '../../../../models/Project';
import Backdrop from '../../../Backdrop/Backdrop';
import Carousel from '../../../Carousel/Carousel';
import CarouselImage from '../../../CarouselImage/CarouselImage';
import CloseCross from '../../../CloseCross/CloseCross';
import Portal from '../../../Portal/Portal';

import classes from './WorkProject.module.scss';

interface ProjectProps {
  project: ProjectModel;
}

const Project: FC<ProjectProps> = ({
  project: { name, description, url, images, repository, technologies },
}) => {
  const [state, setState] = useState({ isCarouselVisible: false });
  const { overflow } = useOverflow();

  const showGallery = () => {
    if (!images.length) return;

    overflow('hidden');
    setState({ ...state, isCarouselVisible: true });
  };

  const hideCarousel = () => {
    overflow('');
    setState({ ...state, isCarouselVisible: false });
  };

  return (
    <div className={classes.Project__Container}>
      <h2 className={classes.Title}>{name}</h2>
      <div className={classes.Content__Container}>
        <div className={classes.ImageContainer}>
          <img
            style={images?.length ? { cursor: 'pointer' } : {}}
            onClick={() => showGallery()}
            src={images[0]?.url}
            alt={`${name} site preview`}
          />
          {state.isCarouselVisible && images?.length ? (
            <Portal>
              <Backdrop />
              <CloseCross fat className={classes.Cross} onClose={hideCarousel} />
              <Carousel
                className={classes.Carousel}
                autoplay={false}
                showArrows={images.length > 1}
                showDots={images.length > 1}
                slide
                key={images.length}
                swipeable
                onElementChange={() => null}>
                {images.map((image) => (
                  <CarouselImage
                    id={image.id}
                    key={image.id}
                    className={classes.CarouselImage}
                    src={image.url}
                    style={{ backgroundPosition: 'top center' }}
                  />
                ))}
              </Carousel>
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
        {technologies.map(({ name, iconUrl }) => (
          <li title={name} className={classes.TechnosList__Item} key={name}>
            <img src={iconUrl} alt={`icone ${name}`} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Project;
