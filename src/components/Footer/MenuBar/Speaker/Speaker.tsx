import React, { FC, useState } from 'react';
import styles from './Speaker.module.scss';
import VolumeMenu from './VolumeMenu/VolumeMenu';

interface SpeakerProps {}

const Speaker: FC<SpeakerProps> = () => {
  const [isVolumeMenuVisible, setIsVolumeMenuVisible] = useState(false);
  const [volume, setVolume] = useState(62);

  let speakerClasses = styles.Speaker;

  if (volume >= 1 && volume <= 32) {
    speakerClasses = [speakerClasses, styles.Speaker__Low].join(' ');
  } else if (volume >= 33 && volume <= 64) {
    speakerClasses = [speakerClasses, styles.Speaker__Medium].join(' ');
  } else if (volume >= 65 && volume <= 100) {
    speakerClasses = [speakerClasses, styles.Speaker__High].join(' ');
  } else {
    speakerClasses = [speakerClasses, styles.Speaker__Mute].join(' ');
  }

  return (
    <div className={styles.Speaker__Container}>
      <span
        onClick={() => setIsVolumeMenuVisible(!isVolumeMenuVisible)}
        className={speakerClasses}></span>
      {isVolumeMenuVisible ? <VolumeMenu volume={volume} onVolumeChange={setVolume} /> : null}
    </div>
  );
};
export default Speaker;
