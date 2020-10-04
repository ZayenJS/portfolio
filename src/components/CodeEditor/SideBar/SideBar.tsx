import React, { FC } from 'react';
import styles from './SideBar.module.scss';

interface SideBarProps {
  activeItem: string;
}

const SideBar: FC<SideBarProps> = ({ activeItem }) => {
  return <div className={styles.SideBar}>{activeItem}</div>;
};

export default SideBar;
