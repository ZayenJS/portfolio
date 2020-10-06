import React, { FC } from 'react';

import styles from './WindowsIcon.module.scss';

interface WindowsIconProps {}

const WindowsIcon: FC<WindowsIconProps> = () => {
  return (
    <div className={styles.WindowsIcon}>
      <span></span>
    </div>
  );
};

export default WindowsIcon;
