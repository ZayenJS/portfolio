import { FC } from 'react';
import { Icon } from '@iconify/react';
import archlinuxIcon from '@iconify/icons-logos/archlinux';

import classes from './TerminalHeader.module.scss';
import WindowActionButtons from '../../WindowActionButtons/WindowActionButtons';

export interface TerminalHeaderProps {
  id: string;
  focused: boolean;
}

const TerminalHeader: FC<TerminalHeaderProps> = ({ id, focused }) => {
  return (
    <div id={id} className={`${classes.Container} ${focused ? classes.Focused : ''}`}>
      <div className={classes.Menu}>
        <Icon icon={archlinuxIcon} width={20} />
        <div className={classes.Add_Tab}>
          <span className={classes.Tab_Count}>1/1</span>
          <span className={classes.Plus} />
        </div>
      </div>
      <span>Tilix: david@the-archlinux:~</span>
      <WindowActionButtons onMinimize={() => null} onMaximize={() => null} onClose={() => null} />
    </div>
  );
};

export default TerminalHeader;
