import React, { FC, useEffect, useState } from 'react';

import VolumeMenu from './VolumeMenu/VolumeMenu';

import { getSpeakerClasses } from '../../../../utils';

import styles from './Speaker.module.scss';

interface SpeakerProps {}

const Speaker: FC<SpeakerProps> = () => {
  const [isVolumeMenuVisible, setIsVolumeMenuVisible] = useState(false);
  const [volume, setVolume] = useState(62);

  useEffect(() => {
    const clickAway = (event: MouseEvent) => {
      const element = event.target as HTMLElement;
      if (!element.classList.contains('volume-menu')) {
        setIsVolumeMenuVisible(false);
      }
    };

    window.addEventListener('click', clickAway);

    return () => window.removeEventListener('click', clickAway);
  }, []);

  return (
    <div className={[styles.Speaker__Container, 'volume-menu'].join(' ')}>
      <span
        onClick={() => setIsVolumeMenuVisible(!isVolumeMenuVisible)}
        className={[getSpeakerClasses(volume, styles), 'volume-menu'].join(' ')}></span>
      {isVolumeMenuVisible ? <VolumeMenu volume={volume} onVolumeChange={setVolume} /> : null}
    </div>
  );
};
export default Speaker;
