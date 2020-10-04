import React, { FC, SetStateAction } from 'react';
import { ActivityBarItemName, IActivityBarItem } from '../../../../models';

import ActivityBarItem from './ActivityBarItem/ActivityBarItem';

interface ActivityBarItemsProps {
  content: IActivityBarItem[];
  className: string;
  activeItem: ActivityBarItemName;
  setActiveItem?: React.Dispatch<SetStateAction<ActivityBarItemName>>;
}

const ActivityBarItems: FC<ActivityBarItemsProps> = ({
  content,
  className,
  activeItem,
  setActiveItem,
}) => {
  return (
    <ul className={className}>
      {content.map((item) => (
        <ActivityBarItem {...item} activeItem={activeItem} setActiveItem={setActiveItem} />
      ))}
    </ul>
  );
};

export default ActivityBarItems;
