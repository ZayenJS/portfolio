import React, { FC, SetStateAction } from 'react';
import { ActivityBarItemName, IActivityBarItem } from '../../../../../models';

import styles from './ActivityBarItem.module.scss';

interface ActivityBarItemProps extends IActivityBarItem {
  activeItem: ActivityBarItemName;
  setActiveItem?: React.Dispatch<SetStateAction<ActivityBarItemName>>;
}

const ActivityBarItem: FC<ActivityBarItemProps> = ({
  name,
  className,
  activeItem,
  setActiveItem,
}) => {
  return (
    <li
      onClick={() =>
        setActiveItem ? (activeItem === name ? setActiveItem('') : setActiveItem(name)) : ''
      }
      className={activeItem === name ? 'editor-activitybar-active' : styles.ActivityBarItem}>
      <span className={activeItem === name ? [className, styles.ActivityBarItem__Active].join(' ') :className}></span>
    </li>
  );
};

export default ActivityBarItem;
