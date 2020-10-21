import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

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
        <nav className={styles.Header__Basic__Navigation}>
          <ul>
            <li>
              <NavLink activeClassName="normal--active" exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="normal--active" to="/projets">
                Projets
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="normal--active" to="/competences">
                Compétences
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="normal--active" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }

  return header;
};

export default Header;
