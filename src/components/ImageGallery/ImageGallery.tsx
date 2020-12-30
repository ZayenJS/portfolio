import React, { FC, useEffect, useState } from 'react';
import Backdrop from '../Backdrop/Backdrop';

import styles from './ImageGallery.module.scss';

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
      if ((event.target as HTMLDivElement).getAttribute('data-name') === 'left') {
        imageChange = '-';
      } else {
        imageChange = '+';
      }

      if (!state.isDisappearing) {
        return setState({ ...state, isDisappearing: true, isAppearing: false, imageChange });
      } else {
        return setState({ ...state, isDisappearing: false, isAppearing: true, imageChange });
      }
    }
  };

  const imageChange = () => {
    if (gallery?.length) {
      if (!state.isAppearing && state.isDisappearing) {
        let currentImageIndex = gallery.findIndex((image: any) => state.image === image);
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
    }
  };

  const onHideGallery = () => {
    if (state.isHidingGallery) {
      hideGallery();
    }
  };

  return (
    <>
      <Backdrop onBackdropClick={() => setState({ ...state, isHidingGallery: true })} />
      <div
        className={[styles.Cross, state.isHidingGallery ? styles.FadeOut : ''].join(' ')}
        onClick={() => setState({ ...state, isHidingGallery: true })}>
        ✖
      </div>
      <div
        onAnimationEnd={onHideGallery}
        className={[
          styles.ImageGallery__Container,
          state.isHidingGallery ? styles.FadeOut : '',
        ].join(' ')}>
        <div
          className={styles.ImageGallery}
          style={gallery?.length && gallery.length <= 1 ? { justifyContent: 'center' } : {}}>
          {gallery?.length && gallery?.length > 1 ? (
            <div onClick={imageStateChange} data-name="left" className={styles.Arrow__Left}>
              ‹
            </div>
          ) : null}
          <img
            onAnimationEnd={imageChange}
            className={[styles.Image, state.isAppearing ? styles.FadeIn : styles.FadeOut].join(' ')}
            src={state.image}
            alt=""
          />
          {gallery?.length && gallery?.length > 1 ? (
            <div onClick={imageStateChange} data-name="right" className={styles.Arrow__Right}>
              ›
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default ImageGallery;
