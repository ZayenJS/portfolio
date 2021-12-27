import { FC } from 'react';
import { useHistory } from 'react-router-dom';

import { Icon } from '@iconify/react';
import fileTypeVscode from '@iconify/icons-vscode-icons/file-type-vscode';

import TitleBarItem from '../TitleBar/TitleBarItem/TitleBarItem';
import WindowActionButtons from '../../WindowActionButtons/WindowActionButtons';

import styles from './TitleBar.module.scss';

interface TitleBarProps {
  title: string;
}

const TitleBar: FC<TitleBarProps> = ({ title }) => {
  let fileName;
  const history = useHistory();

  if (title) {
    fileName = title + ' - ';
  } else {
    fileName = title;
  }

  return (
    <header className={styles.TitleBar}>
      <div className={styles.TitleBar__Menu}>
        <ul>
          <li>
            <Icon icon={fileTypeVscode} width={20} />
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
      <h2 className={styles.TitleBar__FileName}>{fileName}Portfolio - Visual Studio Code</h2>
      <WindowActionButtons
        onMinimize={() => null}
        onMaximize={() => null}
        onClose={() => history.push('/')}
      />
    </header>
  );
};

export default TitleBar;
