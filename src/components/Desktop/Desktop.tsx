import React, { FC } from 'react';
import { Switch, Route, RouteComponentProps } from 'react-router-dom';

import Layout from '../Layout/Layout';

import vscodeIcon from '../../assets/images/Visual_Studio_Code_1.35_icon.svg';
import recycleBin from '../../assets/images/recycle-bin.png';
import googleChrome from '../../assets/images/chrome.png';

import styles from './Desktop.module.scss';
import CodeEditor from '../CodeEditor/CodeEditor';
import DesktopIcon from './DesktopIcon/DesktopIcon';

interface DesktopProps extends RouteComponentProps {}

const Desktop: FC<DesktopProps> = ({ history }) => {
  return (
    <Layout>
      <div className={styles.Desktop}>
        <div className={styles.Desktop__Icons}>
          <DesktopIcon id="recycle-bin" src={recycleBin} alt="recycle bin icon" label="Corbeille" />
          <DesktopIcon
            id="google-chrome"
            src={googleChrome}
            alt="google chrome icon"
            label="Chrome"
            onDoubleClick={() => window.open('https://google.com', '_blank')}
          />
          <DesktopIcon
            id="vscode"
            src={vscodeIcon}
            alt="vscode icon"
            label="Visual Studio Code"
            onDoubleClick={() => history.push('/code/readme.md')}
          />
        </div>
        <Switch>
          <Route exact path="/"></Route>
          <Route path="/code" component={CodeEditor} />
        </Switch>
      </div>
    </Layout>
  );
};

export default Desktop;
