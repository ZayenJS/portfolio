import React, { FC } from 'react';
import styles from './SideBar.module.scss';

interface SideBarProps {}

const SideBar: FC<SideBarProps> = () => {
  return <div className={styles.SideBar}></div>;
};

export default SideBar;
