import React, { FC, useState } from 'react';

import Explorer from './Explorer/Explorer';

import { ActivityBarItemName } from '../../../models';

import classes from './SideBar.module.scss';

interface SideBarProps {
  activeItem: ActivityBarItemName;
}

const SideBar: FC<SideBarProps> = ({ activeItem }) => {
  const [isHovered, setIsHovered] = useState(false);
  let sideBarContent;

  switch (activeItem) {
    case 'explorer':
      sideBarContent = (
        <Explorer activeItem={activeItem} isHovered={isHovered} setIsHovered={setIsHovered} />
      );
      break;
    default:
      sideBarContent = null;
  }

  return <div className={classes.SideBar}>{sideBarContent}</div>;
};

export default SideBar;
