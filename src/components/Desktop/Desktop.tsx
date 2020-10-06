import React, { CSSProperties, FC, useState } from 'react';
import { Switch, Route, RouteComponentProps } from 'react-router-dom';

import Layout from '../Layout/Layout';

import vscodeIcon from '../../assets/images/Visual_Studio_Code_1.35_icon.svg';
import recycleBin from '../../assets/images/recycle-bin.png';
import googleChrome from '../../assets/images/chrome.png';

import styles from './Desktop.module.scss';
import CodeEditor from '../CodeEditor/CodeEditor';
import DesktopIcon from './DesktopIcon/DesktopIcon';
// import Terminal from '../Terminal/Terminal';

interface DesktopProps extends RouteComponentProps {
  style?: CSSProperties;
  isDevMode?: boolean;
}

const Desktop: FC<DesktopProps> = ({ history, style, isDevMode = false }) => {
  return (
    <Layout isDevMode={isDevMode}>
      <div style={style ?? {}} className={styles.Desktop}>
        <div className={styles.Desktop__Icons}>
          <DesktopIcon id="recycle-bin" src={recycleBin} alt="recycle bin icon" label="Corbeille" />
          <DesktopIcon
            id="google-chrome"
            src={googleChrome}
            alt="google chrome icon"
            label="Chrome"
            onDoubleClick={() => (isDevMode ? window.open('https://google.com', '_blank') : '')}
          />
          <DesktopIcon
            id="vscode"
            src={vscodeIcon}
            alt="vscode icon"
            label="Visual Studio Code"
            onDoubleClick={() => (isDevMode ? history.push('/code/readme.md') : '')}
          />
        </div>
        {isDevMode ? (
          <Switch>
            <Route path="/code" component={CodeEditor} />
          </Switch>
        ) : null}
      </div>
    </Layout>
  );
};

export default Desktop;
