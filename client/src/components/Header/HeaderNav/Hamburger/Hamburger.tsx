import React, { FC } from 'react';
import classes from './Hamburger.module.scss';

interface HamburgerProps {
  toggleMenu: () => void;
  isOpen: boolean;
  className?: string;
}

const Hamburger: FC<HamburgerProps> = ({ toggleMenu, isOpen, className }) => (
  <button type="button" onClick={toggleMenu} className={`${classes.Hamburger} ${className ?? ''}`}>
    <div className={isOpen ? classes.Hamburger__First__Open : classes.Hamburger__First}>
      <div />
      <div />
    </div>
    <div className={isOpen ? classes.Hamburger__Second__Open : classes.Hamburger__Second}>
      <div />
      <div />
    </div>
    <div className={isOpen ? classes.Hamburger__Third__Open : classes.Hamburger__Third}>
      <div />
      <div />
    </div>
  </button>
);

export default Hamburger;
