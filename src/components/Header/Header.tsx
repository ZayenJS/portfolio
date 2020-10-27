import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import HeaderNav from './HeaderNav/HeaderNav';

import logo from '../../assets/images/logo.svg';
import styles from './Header.module.scss';

interface HeaderProps {
  isNormalMode: boolean;
}

const Header: FC<HeaderProps> = ({ isNormalMode }) => {
  let header = null;

  if (isNormalMode) {
    header = (
      <header className={styles.Header__Normal}>
        <NavLink to="/" activeClassName="" className={styles.Header__Normal__Title}>
          <h1>
            <img src={logo} alt="" />
          </h1>
        </NavLink>
        <HeaderNav />
      </header>
    );
  }

  return header;
};

export default Header;
