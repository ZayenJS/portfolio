import React, { FC, useState } from 'react';

import styles from './TitleBarItem.module.scss';
import { useHistory } from 'react-router-dom';
import { WindowControls } from '../../../../models';

interface TitleBarItemProps {
  text?: string;
  control?: WindowControls;
  hoveredClass?: string;
  category: 'window-control' | 'menu' | 'title';
}

const TitleBarItem: FC<TitleBarItemProps> = ({ control, text, hoveredClass }) => {
  const [isHovered, setIsHovered] = useState(false);
  const history = useHistory();

  let className = [styles.TitleBarItem];

  let onClickEvent: ((event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void) | undefined;

  switch (control) {
    case 'minimize':
      className = [styles.TitleBarItem, styles.TitleBarItem__Minimize];
      break;
    case 'maximize':
      className = [styles.TitleBarItem, styles.TitleBarItem__Maximize];
      break;
    case 'close':
      className = [styles.TitleBarItem, styles.TitleBarItem__Close];
      onClickEvent = () => history.push('/');
      break;
    default:
      onClickEvent = () => '';
  }

  return (
    <li
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClickEvent}
      className={
        isHovered
          ? [styles.TitleBarItem__Container, hoveredClass].join(' ')
          : styles.TitleBarItem__Container
      }>
      <span className={className.join(' ')}>{text ? text : ''}</span>
    </li>
  );
};

export default TitleBarItem;
