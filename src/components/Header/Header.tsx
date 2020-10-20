import React, { FC } from 'react';

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
        <div>
          <h1>
            <img style={{ width: '20rem' }} src={logo} alt="" />
          </h1>
        </div>
      </header>
    );
  }

  return header;
};

export default Header;
