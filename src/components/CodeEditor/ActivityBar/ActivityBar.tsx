import React, { FC, SetStateAction } from 'react';
import { faCopy } from '@fortawesome/free-regular-svg-icons';
import styles from './ActivityBar.module.scss';
import ActivityBarItems from './AcivityBarItems/ActivityBarItems';
import { ActivityBarItemName, IActivityBarItem } from '../../../models';

interface ActivityBarProps {
  activeItem: ActivityBarItemName;
  setActiveItem?: React.Dispatch<SetStateAction<ActivityBarItemName>>;
}

const ActivityBar: FC<ActivityBarProps> = ({ activeItem, setActiveItem }) => {
  const topItems: IActivityBarItem[] = [
    { name: 'explorer', className: styles.ActivityBar__Actions__Explorer, icon: faCopy },
    { name: 'search', className: styles.ActivityBar__Actions__Search },
    { name: 'gitbranch', className: styles.ActivityBar__Actions__GitBranch },
    { name: 'debug', className: styles.ActivityBar__Actions__Debug },
    { name: 'bookmark', className: styles.ActivityBar__Actions__Bookmark },
  ];

  const bottomItems: IActivityBarItem[] = [
    { name: 'profile', className: styles.ActivityBar__Actions__Profile },
    { name: 'settings', className: styles.ActivityBar__Actions__Settings },
  ];

  return (
    <div className={styles.ActivityBar}>
      <ActivityBarItems
        activeItem={activeItem}
        setActiveItem={setActiveItem}
        className={styles.ActivityBar__Actions}
        content={topItems}
      />
      <ActivityBarItems
        activeItem={activeItem}
        className={styles.ActivityBar__Actions}
        content={bottomItems}
      />
    </div>
  );
};

export default ActivityBar;

//Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
