import React, { FC, SetStateAction } from 'react';
import { IActivityBarItem } from '../../../../models';

import ActivityBarItem from './ActivityBarItem/ActivityBarItem';

interface ActivityBarItemsProps {
  content: IActivityBarItem[];
  className: string;
  activeItem: string;
  setActiveItem?: React.Dispatch<SetStateAction<string>>;
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
