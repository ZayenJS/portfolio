import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import HeaderNav from './HeaderNav/HeaderNav';
import SocialNetworks from './SocialNetworks/SocialNetWorks';

import logo from '../../assets/images/logo.svg';
import styles from './Header.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../store/reducers';
import { hoverHeader } from '../../store/actions/normalMode';

interface HeaderProps {
  isNormalMode: boolean;
}

const Header: FC<HeaderProps> = ({ isNormalMode }) => {
  let header = null;

  const dispatch = useDispatch();
  const { isHeaderHovered } = useSelector((state: State) => state.normalMode.global);

  if (isNormalMode) {
    header = (
      <header
        onMouseEnter={() => dispatch(hoverHeader(true))}
        onMouseLeave={() => dispatch(hoverHeader(false))}
        className={[styles.Header__Normal, isHeaderHovered ? styles.Hovered : ''].join(' ')}>
        <NavLink to="/" activeClassName="" className={styles.Header__Normal__Title}>
          <h1 style={!isHeaderHovered ? { opacity: 0, transform: 'translateX(-7rem)' } : {}}>
            <img src={logo} alt="" />
          </h1>
        </NavLink>
        <HeaderNav />
        <SocialNetworks />
      </header>
    );
  }

  return header;
};

export default Header;
