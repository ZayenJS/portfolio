import React, { FC, SetStateAction } from 'react';

import { getSpeakerClasses } from '../../../../../utils';

import classes from './VolumeMenu.module.scss';

interface VolumeMenuProps {
  volume: number;
  onVolumeChange: React.Dispatch<SetStateAction<number>>;
}

const VolumeMenu: FC<VolumeMenuProps> = ({ volume, onVolumeChange }) => {
  const onVolumeChangeHandler = (event: any) => {
    onVolumeChange(+event.target.value);
  };

  return (
    <div className={['volume-menu', classes.VolumeMenu].join(' ')}>
      <div className={['volume-menu', classes.VolumeMenu__Device].join(' ')}>
        Périphérique de lecture standard
      </div>
      <div className={['volume-menu', classes.VolumeMenu__Settings].join(' ')}>
        <span className={['volume-menu', getSpeakerClasses(volume, classes)].join(' ')}></span>
        <span className={['volume-menu', classes.VolumeMenu__Range].join(' ')}>
          <input
            className="volume-menu"
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={(event: any) => onVolumeChangeHandler(event)}
          />
        </span>
        <span className="volume-menu">{volume}</span>
      </div>
    </div>
  );
};

export default VolumeMenu;
