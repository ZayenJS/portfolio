import React, { FC, useState } from 'react';

import classes from './TitleBarItem.module.scss';
import { WindowControls } from '../../../../models';

interface TitleBarItemProps {
  text?: string;
  control?: WindowControls;
  category: 'window-control' | 'menu' | 'title';
}

const TitleBarItem: FC<TitleBarItemProps> = ({ control, text }) => {
  return (
    <li className={classes.TitleBarItem__Container}>
      <span className={classes.TitleBarItem}>{text ? text : ''}</span>
    </li>
  );
};

export default TitleBarItem;
