import React, { FC } from 'react';
import styles from './Hamburger.module.scss';

interface HamburgerProps {
  toggleMenu: () => void;
  isOpen: boolean;
  className?: string;
}

const Hamburger: FC<HamburgerProps> = ({ toggleMenu, isOpen, className }) => (
  <button type="button" onClick={toggleMenu} className={`${styles.Hamburger} ${className ?? ''}`}>
    <div className={isOpen ? styles.Hamburger__First__Open : styles.Hamburger__First}>
      <div />
      <div />
    </div>
    <div className={isOpen ? styles.Hamburger__Second__Open : styles.Hamburger__Second}>
      <div />
      <div />
    </div>
    <div className={isOpen ? styles.Hamburger__Third__Open : styles.Hamburger__Third}>
      <div />
      <div />
    </div>
  </button>
);

export default Hamburger;
