import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import HeaderNav from './HeaderNav/HeaderNav';
import SocialNetworks from './SocialNetworks/SocialNetWorks';

import logo from '../../assets/images/logo.svg';
import classes from './Header.module.scss';
import { useDispatch } from 'react-redux';
import { useHeader } from '../../hooks/useHeader';
import { Mode } from '../../models';
import { useMode } from '../../hooks/useMode';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  let header = null;

  const { isHeaderHovered, hoverHeader } = useHeader();
  const { mode } = useMode();

  if (mode === Mode.NORMAL) {
    header = (
      <header
        onMouseEnter={() => hoverHeader(true)}
        onMouseLeave={() => hoverHeader(false)}
        className={[classes.Header__Normal, isHeaderHovered ? classes.Hovered : ''].join(' ')}>
        <NavLink to="/" activeClassName="" className={classes.Header__Normal__Title}>
          <h1 style={isHeaderHovered ? {} : { opacity: 0, transform: 'translateX(-7rem)' }}>
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
