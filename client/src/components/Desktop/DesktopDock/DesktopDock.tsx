import { FC, useEffect, useMemo, useState } from 'react';
import { NavLink } from 'react-router-dom';

import bxlSpotify from '@iconify/icons-bx/bxl-spotify';

import brave from '../../../assets/images/icons/dock/brave.svg';
import chrome from '../../../assets/images/icons/dock/google-chrome.svg';
import code from '../../../assets/images/icons/dock/code.svg';
import tilix from '../../../assets/images/icons/dock/tilix.svg';
import slack from '../../../assets/images/icons/dock/slack.svg';
import trash from '../../../assets/images/icons/dock/user-trash.svg';

import classes from './DesktopDock.module.scss';
import { Icon } from '@iconify/react';

export interface DesktopDockProps {}

const DesktopDock: FC<DesktopDockProps> = () => {
  const [state, setState] = useState({ isVisible: false });

  const dockHeight = useMemo(() => 7 * 16, []);
  useEffect(() => {
    const mouseMoveHandler = (event: MouseEvent) => {
      if (state.isVisible && event.pageY < window.innerHeight - dockHeight) {
        setState((ps) => ({ ...ps, isVisible: false }));
      } else if (!state.isVisible && event.pageY > window.innerHeight - dockHeight / 2) {
        setState((ps) => ({ ...ps, isVisible: true }));
      }
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    return () => document.removeEventListener('mousemove', mouseMoveHandler);
  }, [dockHeight, state.isVisible]);

  return (
    <div className={`${classes.Container} ${state.isVisible ? classes.Visible : ''}`}>
      <div className={classes.Apps} data-title="Afficher les applications">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <div data-title="Brave">
        <img src={brave} alt="" />
      </div>
      <div data-title="Google Chrome">
        <img src={chrome} alt="" />
      </div>
      <NavLink activeClassName={classes.Active} to="/code" data-title="Visual Studio Code">
        <img src={code} alt="" />
      </NavLink>
      <div data-title="Tilix">
        <img src={tilix} alt="" />
      </div>
      <div data-title="Slack">
        <img src={slack} alt="" />
      </div>
      <div data-title="Spotify">
        <Icon icon={bxlSpotify} width={100} color="#1ed760" enableBackground={'transparent'} />
      </div>
      <hr />
      <div data-title="Trash">
        <img src={trash} alt="" />
      </div>
    </div>
  );
};

export default DesktopDock;
