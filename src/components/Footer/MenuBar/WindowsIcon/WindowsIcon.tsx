import React, { FC, useState } from 'react';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

import styles from './WindowsIcon.module.scss';

interface WindowsIconProps extends FontAwesomeIconProps {}

const WindowsIcon: FC<WindowsIconProps> = ({ icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={styles.WindowsIcon__Container}>
      <FontAwesomeIcon
        className={isHovered ? styles.WindowsIcon__Hovered : styles.WindowsIcon}
        icon={icon}
        size="lg"
      />
    </div>
  );
};

export default WindowsIcon;
