import React, { CSSProperties, FC } from 'react';
import { Switch, Route, RouteComponentProps } from 'react-router-dom';

import Layout from '../Layout/Layout';

import classes from './Desktop.module.scss';
import CodeEditor from '../CodeEditor/CodeEditor';
import DesktopDock from './DesktopDock/DesktopDock';
import { useMode } from '../../hooks/useMode';
import { Mode } from '../../models';

interface DesktopProps extends RouteComponentProps {
  style?: CSSProperties;
}

const Desktop: FC<DesktopProps> = ({ history, style }) => {
  const { mode } = useMode();

  return (
    <Layout>
      <div style={style ?? {}} className={classes.Desktop}>
        {mode === Mode.DEV ? (
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
