import React, { FC, useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { State } from '../../../store/reducers';
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

  const history = useHistory();

  const navigateTo = (path: string) => {
    history.push(path);
  };
  let activePath: string;
  switch (history.location.pathname) {
    case '/projets':
      activePath = 'projects';
      break;
    case '/':
      activePath = 'home';
      break;
    case '/competences':
      activePath = 'skills';
      break;
    case '/contact':
      activePath = 'contact';
      break;
    default:
      activePath = '';
  }

  const links = [
    {
      type: 'internal',
      path: '/',
      name: 'Home',
      textContent: 'Home',
    },
    {
      type: 'internal',
      path: '/projets',
      name: 'Projects',
      textContent: 'Projets',
    },
    {
      type: 'internal',
      path: '/competences',
      name: 'Skills',
      textContent: 'Skills',
    },
    // {
    //   type: 'external',
    //   path: 'https://dev-with-dave.fr',
    //   name: 'Blog',
    //   textContent: 'Blog',
    // },
    {
      type: 'internal',
      path: '/contact',
      name: 'Contact',
      textContent: 'Contact',
    },
  ];

  const { isHeaderHovered } = useSelector((state: State) => state.global);

  return (
    <nav className={styles.HeaderNav}>
      <Hamburger toggleMenu={toggleMenu} isOpen={state.isMenuOpen} />
      <ul className={state.isMenuOpen ? state.menuClass.opened : state.menuClass.closed}>
        {links.map((link) => (
          <li
            key={link.path}
            onClick={() => (link.type === 'internal' ? navigateTo(link.path) : '')}
            className={[styles.HeaderNav__Links__Item, styles[link.name]].join(' ')}>
            {link.type === 'internal' ? (
              <NavLink
                to={link.path}
                exact={link.path === '/'}
                activeClassName="normal--active"
                className={
                  isHeaderHovered
                    ? [styles.NavLink, styles.Hovered].join(' ')
                    : [styles.NavLink].join(' ')
                }>
                {link.textContent}
              </NavLink>
            ) : (
              <a href={link.path} rel="noopener noreferrer" target="_blank">
                {link.textContent}
              </a>
            )}
            <span
              className={
                activePath.toLowerCase() === link.name.toLowerCase() ? 'normal--active' : ''
              }></span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNav;
