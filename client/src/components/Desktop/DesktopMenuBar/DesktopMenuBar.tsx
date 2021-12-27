import { FC, useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { Icon } from '@iconify/react';
import archlinuxIcon from '@iconify/icons-logos/archlinux';

import classes from './DesktopMenuBar.module.scss';

export interface DesktopMenuBarProps {}

const DesktopMenuBar: FC<DesktopMenuBarProps> = () => {
  const [state, setState] = useState({ timestamp: '' });

  useEffect(() => {
    const interval = setInterval(() => {
      setState((ps) => ({ ...ps, timestamp: dayjs().format('dd. DD MMM HH:mm:ss') }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.Container}>
      <div className={classes.Left}>
        <Icon icon={archlinuxIcon} width={20} />
        <span>Applications</span>
      </div>
      <time>{state.timestamp}</time>
      <div>icons...</div>
    </div>
  );
};

export default DesktopMenuBar;
