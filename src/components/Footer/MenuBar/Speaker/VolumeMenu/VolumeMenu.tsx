import React, { FC, SetStateAction } from 'react';
import styles from './VolumeMenu.module.scss';

interface VolumeMenuProps {
  volume: number;
  onVolumeChange: React.Dispatch<SetStateAction<number>>;
}

const VolumeMenu: FC<VolumeMenuProps> = ({ volume, onVolumeChange }) => {
  const onVolumeChangeHandler = (event: any) => {
    onVolumeChange(+event.target.value);
  };

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
    <div className={styles.VolumeMenu}>
      <div>Périphérique de lecture standard</div>
      <div>
        <span className={speakerClasses}></span>
        <span className={styles.VolumeMenu__Range}>
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={(event: any) => onVolumeChangeHandler(event)}
          />
        </span>
        <span>{volume}</span>
      </div>
    </div>
  );
};

export default VolumeMenu;
