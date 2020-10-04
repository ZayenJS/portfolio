import React, { FC } from 'react';
import { faWindowMinimize, faWindowRestore } from '@fortawesome/free-regular-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import TitleBarItem from '../TitleBar/TitleBarItem/TitleBarItem';

import vscodeIcon from '../../../assets/images/Visual_Studio_Code_1.35_icon.svg';

import styles from './TitleBar.module.scss';

interface TitleBarProps {
  title: string;
}

const TitleBar: FC<TitleBarProps> = ({ title }) => {
  return (
    <header className={styles.TitleBar}>
      <div className={styles.TitleBar__Menu}>
        <ul>
          <li>
            <img src={vscodeIcon} alt="vscode icon" style={{ width: '1rem' }} />
          </li>
          <TitleBarItem category="menu" text="File" />
          <TitleBarItem category="menu" text="Edit" />
          <TitleBarItem category="menu" text="Selection" />
          <TitleBarItem category="menu" text="View" />
          <TitleBarItem category="menu" text="Go" />
          <TitleBarItem category="menu" text="Run" />
          <TitleBarItem category="menu" text="Terminal" />
          <TitleBarItem category="menu" text="Help" />
        </ul>
      </div>
      <h2 className={styles.TitleBar__FileName}>{title}Mon Portfolio - Visual Studio Code</h2>
      <div className={styles.TitleBar__WindowControl}>
        <ul>
          <TitleBarItem category="window-control" icon={faWindowMinimize} size="sm" />
          <TitleBarItem category="window-control" icon={faWindowRestore} size="sm" />
          <TitleBarItem
            category="window-control"
            icon={faTimes}
            size="sm"
            hoveredClass={styles.Icon__Exit}
            name="exit"
          />
        </ul>
      </div>
    </header>
  );
};

export default TitleBar;
