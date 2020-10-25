import React, { FC } from 'react';
import styles from './Hamburger.module.scss';

interface HamburgerProps {
  toggleMenu: () => void;
  isOpen: boolean;
}

const Hamburger: FC<HamburgerProps> = ({ toggleMenu, isOpen }) => {
  return (
    <div onClick={toggleMenu} className={styles.Hamburger}>
      <div className={isOpen ? styles.Hamburger__First__Open : styles.Hamburger__First}>
        <div></div>
        <div></div>
      </div>
      <div className={isOpen ? styles.Hamburger__Second__Open : styles.Hamburger__Second}>
        <div></div>
        <div></div>
      </div>
      <div className={isOpen ? styles.Hamburger__Third__Open : styles.Hamburger__Third}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Hamburger;
