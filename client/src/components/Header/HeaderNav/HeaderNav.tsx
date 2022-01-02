import { FC, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useHeader } from '../../../hooks/useHeader';
import { useOverflow } from '../../../hooks/useOverflow';
import SocialNetWorks from '../SocialNetworks/SocialNetWorks';
import Hamburger from './Hamburger/Hamburger';

import classes from './HeaderNav.module.scss';

interface HeaderNavProps {}

const HeaderNav: FC<HeaderNavProps> = () => {
  const [state, setState] = useState({
    isMenuOpen: false,
  });

  const toggleMenu = () => setState((ps) => ({ ...ps, isMenuOpen: !state.isMenuOpen }));

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

  const { isHeaderHovered } = useHeader();
  useOverflow(state.isMenuOpen);

  return (
    <nav className={classes.HeaderNav}>
      <Hamburger className={classes.Burger} toggleMenu={toggleMenu} isOpen={state.isMenuOpen} />
      <div className={`${classes.Menu}  ${state.isMenuOpen ? classes.Open : ''}`}>
        <ul className={`${classes.HeaderNav__Links}`}>
          {links.map((link) => (
            <li
              key={link.path}
              onClick={() => (link.type === 'internal' ? navigateTo(link.path) : '')}
              className={[classes.HeaderNav__Links__Item, classes[link.name]].join(' ')}>
              {link.type === 'internal' ? (
                <NavLink
                  onClick={toggleMenu}
                  to={link.path}
                  exact={link.path === '/'}
                  activeClassName={classes.Active}
                  className={`${classes.NavLink} ${isHeaderHovered ? classes.Hovered : ''}`}>
                  {link.textContent}
                </NavLink>
              ) : (
                <a href={link.path} rel="noopener noreferrer" target="_blank">
                  {link.textContent}
                </a>
              )}
            </li>
          ))}
        </ul>
        <SocialNetWorks className={`${classes.HeaderNav__Links}`} />
      </div>
    </nav>
  );
};

export default HeaderNav;
