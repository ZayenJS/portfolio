import React, { FC, useEffect, useState } from 'react';
import Backdrop from '../Backdrop/Backdrop';
import CloseCross from '../CloseCross/CloseCross';

import classes from './ImageGallery.module.scss';

interface ImageGalleryProps {
  gallery?: string[];
  hideGallery: () => void;
}

interface ImageGalleryState {
  image: string;
  imageChange?: '+' | '-';
  isAppearing: boolean;
  isDisappearing: boolean;
  isHidingGallery: boolean;
}

const ImageGallery: FC<ImageGalleryProps> = ({ gallery, hideGallery }) => {
  const [state, setState] = useState<ImageGalleryState>({
    image: '',
    imageChange: undefined,
    isAppearing: true,
    isDisappearing: false,
    isHidingGallery: false,
  });

  useEffect(() => {
    if (!state.image && gallery?.length) {
      setState({ ...state, image: gallery[0] });
    }
  }, [gallery, state]);

  const imageStateChange = (event: React.MouseEvent) => {
    if (gallery?.length) {
      let imageChange: '+' | '-';
      imageChange =
        (event.target as HTMLDivElement).getAttribute('data-name') === 'left' ? '-' : '+';

      if (!state.isDisappearing) {
        return setState({ ...state, isDisappearing: true, isAppearing: false, imageChange });
      }

      return setState({ ...state, isDisappearing: false, isAppearing: true, imageChange });
    }
  };

  const imageChange = () => {
    if (gallery?.length && !state.isAppearing && state.isDisappearing) {
      const currentImageIndex = gallery.findIndex((image: any) => state.image === image);
      let imageIndex = 0;

      if (state.imageChange === '-') {
        imageIndex = currentImageIndex - 1 < 0 ? gallery.length - 1 : currentImageIndex - 1;
      } else if (state.imageChange === '+') {
        imageIndex = currentImageIndex + 1 > gallery.length ? 0 : currentImageIndex + 1;
      }

      setState({
        ...state,
        image: gallery[imageIndex],
        isAppearing: true,
        isDisappearing: false,
      });
    }
  };

  const onHideGallery = () => {
    if (state.isHidingGallery) {
      hideGallery();
    }
  };

  const hasMoreThanOnePic = gallery?.length && gallery.length > 1;

  return (
    <>
      <Backdrop />
      <CloseCross
        fat
        className={`${classes.Cross} ${state.isHidingGallery ? classes.FadeOut : ''}`}
        onClose={hideGallery}
      />

      <div
        onAnimationEnd={onHideGallery}
        style={hasMoreThanOnePic ? {} : { width: '75%' }}
        className={[
          classes.ImageGallery__Container,
          state.isHidingGallery ? classes.FadeOut : '',
        ].join(' ')}>
        <div
          className={classes.ImageGallery}
          style={hasMoreThanOnePic ? {} : { justifyContent: 'center' }}>
          {hasMoreThanOnePic ? (
            <div onClick={imageStateChange} data-name="left" className={classes.Arrow__Left}>
              ‹
            </div>
          ) : null}
          {/* TODO: fix fade in image bug */}
          <img
            onAnimationEnd={imageChange}
            style={hasMoreThanOnePic ? {} : { width: '100%' }}
            className={[classes.Image, state.isAppearing ? classes.FadeIn : classes.FadeOut].join(
              ' ',
            )}
            src={state.image}
            alt=""
          />
          {hasMoreThanOnePic ? (
            <div onClick={imageStateChange} data-name="right" className={classes.Arrow__Right}>
              ›
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default ImageGallery;
