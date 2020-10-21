import React, { FC } from 'react';
import styles from './Hamburger.module.scss';

interface HamburgerProps {
  toggleMenu: () => void;
}

const Hamburger: FC<HamburgerProps> = ({ toggleMenu }) => {
  return <div onClick={toggleMenu} className={styles.Hamburger}></div>;
};

export default Hamburger;
