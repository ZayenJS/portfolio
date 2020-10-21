import React, { FC, useCallback, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Hamburger from './Hamburger/Hamburger';

import styles from './HeaderNav.module.scss';

interface HeaderNavProps {}

const HeaderNav: FC<HeaderNavProps> = () => {
  const [state, setState] = useState({
    isMenuOpen: false,
    menuClass: {
      opened: styles.HeaderNav__Links__Open,
      closed: styles.HeaderNav__Links,
    },
  });

  const changeMenuClass = useCallback(
    (opened: string, closed: string) =>
      setState((prevState) => ({
        ...prevState,
        menuClass: { ...state.menuClass, opened: opened, closed: closed },
      })),
    [state.menuClass],
  );

  useEffect(() => {
    let interval = setInterval(() => {
      const opened = styles.HeaderNav__Links__Open,
        closed = styles.HeaderNav__Links;

      if (matchMedia('(min-width:992px)').matches) {
        const desktopClass = styles.HeaderNav__Links__Desktop;

        if (desktopClass === state.menuClass.opened && desktopClass === state.menuClass.closed)
          return;

        return changeMenuClass(desktopClass, desktopClass);
      }

      if (opened === state.menuClass.opened && closed === state.menuClass.closed) return;

      return changeMenuClass(opened, closed);
    }, 50);

    return () => clearInterval(interval);
  }, [changeMenuClass, state]);

  const toggleMenu = () => setState({ ...state, isMenuOpen: !state.isMenuOpen });

  return (
    <nav className={styles.HeaderNav}>
      <Hamburger toggleMenu={toggleMenu} />
      <ul className={state.isMenuOpen ? state.menuClass.opened : state.menuClass.closed}>
        <li className={styles.HeaderNav__Links__Item}>
          <NavLink activeClassName="normal--active" exact to="/">
            Home
          </NavLink>
        </li>
        <li className={styles.HeaderNav__Links__Item}>
          <NavLink activeClassName="normal--active" to="/projets">
            Projets
          </NavLink>
        </li>
        <li className={styles.HeaderNav__Links__Item}>
          <NavLink activeClassName="normal--active" to="/competences">
            Compétences
          </NavLink>
        </li>
        <li className={styles.HeaderNav__Links__Item}>
          <NavLink activeClassName="normal--active" to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
