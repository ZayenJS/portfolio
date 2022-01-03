import React, { FC, SetStateAction } from 'react';
import classes from './ActivityBar.module.scss';
import ActivityBarItems from './AcivityBarItems/ActivityBarItems';
import { ActivityBarItemName, IActivityBarItem } from '../../../models';

interface ActivityBarProps {
  activeItem: ActivityBarItemName;
  setActiveItem?: React.Dispatch<SetStateAction<ActivityBarItemName>>;
}

const ActivityBar: FC<ActivityBarProps> = ({ activeItem, setActiveItem }) => {
  const topItems: IActivityBarItem[] = [
    { name: 'explorer', className: classes.ActivityBar__Actions__Explorer },
    { name: 'search', className: classes.ActivityBar__Actions__Search },
    { name: 'gitbranch', className: classes.ActivityBar__Actions__GitBranch },
    { name: 'debug', className: classes.ActivityBar__Actions__Debug },
    { name: 'extensions', className: classes.ActivityBar__Actions__Extensions },
  ];

  const bottomItems: IActivityBarItem[] = [
    { name: 'profile', className: classes.ActivityBar__Actions__Profile },
    { name: 'settings', className: classes.ActivityBar__Actions__Settings },
  ];

  return (
    <div className={classes.ActivityBar}>
      <ActivityBarItems
        activeItem={activeItem}
        setActiveItem={setActiveItem}
        className={classes.ActivityBar__Actions}
        content={topItems}
      />
      <ActivityBarItems
        activeItem={activeItem}
        className={classes.ActivityBar__Actions}
        content={bottomItems}
      />
    </div>
  );
};

export default ActivityBar;

//Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
