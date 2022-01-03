import React, { FC } from 'react';

import classes from './WindowsIcon.module.scss';

interface WindowsIconProps {}

const WindowsIcon: FC<WindowsIconProps> = () => {
  return (
    <div className={classes.WindowsIcon}>
      <span></span>
    </div>
  );
};

export default WindowsIcon;
