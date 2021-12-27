import React, { CSSProperties, FC } from 'react';
import { Switch, Route, RouteComponentProps } from 'react-router-dom';

import Layout from '../Layout/Layout';

import styles from './Desktop.module.scss';
import CodeEditor from '../CodeEditor/CodeEditor';
import DesktopDock from './DesktopDock/DesktopDock';

interface DesktopProps extends RouteComponentProps {
  style?: CSSProperties;
  isDevMode?: boolean;
}

const Desktop: FC<DesktopProps> = ({ history, style, isDevMode = false }) => {
  return (
    <Layout isDevMode={isDevMode} isNormalMode={false}>
      <div style={style ?? {}} className={styles.Desktop}>
        <div className={styles.Desktop__Icons}></div>
        {isDevMode ? (
          <Switch>
            <Route path="/code" component={CodeEditor} />
          </Switch>
        ) : null}
      </div>
      <DesktopDock />
    </Layout>
  );
};

export default Desktop;
