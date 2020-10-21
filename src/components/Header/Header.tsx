import React, { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';

import HeaderNav from './HeaderNav/HeaderNav';

import logo from '../../assets/images/logo.svg';
import styles from './Header.module.scss';

interface HeaderProps {
  isBasic: boolean;
}

const Header: FC<HeaderProps> = ({ isBasic }) => {
  let header = null;

  if (isBasic) {
    header = (
      <header className={styles.Header__Basic}>
        <NavLink to="/" activeClassName="" className={styles.Header__Basic__Title}>
          <h1>
            <img style={{ width: '20rem' }} src={logo} alt="" />
          </h1>
        </NavLink>
        <HeaderNav />
      </header>
    );
  }

  return header;
};

export default Header;
