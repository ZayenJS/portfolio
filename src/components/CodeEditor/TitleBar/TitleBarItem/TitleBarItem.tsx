import React, { FC, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import styles from './TitleBarItem.module.scss';
import { useHistory } from 'react-router-dom';

interface TitleBarItemProps {
  text?: string;
  icon?: IconProp;
  size?: 'lg' | 'sm' | 'xs' | '1x' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x';
  hoveredClass?: string;
  name?: string;
  category: 'window-control' | 'menu' | 'title';
}

const TitleBarItem: FC<TitleBarItemProps> = ({ name, icon, text, hoveredClass, size }) => {
  const [isHovered, setIsHovered] = useState(false);
  const history = useHistory();

  let element;

  if (text) {
    element = <span className={styles.TitleBarItem}>{text}</span>;
  } else if (icon && name === 'exit') {
    element = <FontAwesomeIcon className={styles.TitleBarItem} icon={icon} size={size ?? 'lg'} />;
  } else if (icon) {
    element = <FontAwesomeIcon className={styles.TitleBarItem} icon={icon} size={size ?? 'lg'} />;
  }

  return (
    <li
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => (name === 'exit' ? history.push('/') : '')}
      className={
        isHovered
          ? [styles.TitleBarItem__Container, hoveredClass].join(' ')
          : styles.TitleBarItem__Container
      }>
      {element}
    </li>
  );
};

export default TitleBarItem;
