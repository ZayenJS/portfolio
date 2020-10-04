import React, { FC, SetStateAction } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ActivityBarItemName, IActivityBarItem } from '../../../../../models';

import styles from './ActivityBarItem.module.scss';

interface ActivityBarItemProps extends IActivityBarItem {
  activeItem: ActivityBarItemName;
  setActiveItem?: React.Dispatch<SetStateAction<ActivityBarItemName>>;
}

const ActivityBarItem: FC<ActivityBarItemProps> = ({
  name,
  className,
  icon,
  activeItem,
  setActiveItem,
}) => {
  return (
    <li
      onClick={() =>
        setActiveItem ? (activeItem === name ? setActiveItem('') : setActiveItem(name)) : ''
      }
      className={activeItem === name ? 'editor-activitybar-active' : styles.ActivityBarItem}>
      <span className={className}>{icon ? <FontAwesomeIcon icon={icon} size="1x" /> : null}</span>
    </li>
  );
};

export default ActivityBarItem;
