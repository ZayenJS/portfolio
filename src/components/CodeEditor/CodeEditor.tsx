import React, { FC, useState } from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router-dom';

import ActivityBar from './ActivityBar/ActivityBar';
import Editor from './Editor/Editor';
import SideBar from './SideBar/SideBar';
import StatusBar from './StatusBar/StatusBar';
import TitleBar from './TitleBar/TitleBar';

import { ActivityBarItemName } from '../../models';

import styles from './CodeEditor.module.scss';

interface CodeEditorProps extends RouteComponentProps {}

const CodeEditor: FC<CodeEditorProps> = ({ match }) => {
  // const [isMinimized, setIsMinimized] = useState(false);
  // const [isMaximized, setIsMaximized] = useState(false);
  const [activeItem, setActiveItem] = useState<ActivityBarItemName>('explorer');

  return (
    <div className={styles.CodeEditor}>
      <div className={styles.CodeEditor__Content}>
        <Switch>
          <Route exact path={`${match.path}`}>
            <TitleBar title="" />
          </Route>
          <Route path={`${match.path}/readme.md`}>
            <TitleBar title="README.md" />
          </Route>
          <Route path={`${match.path}/hireme.tsx`}>
            <TitleBar title="HireMe.tsx" />
          </Route>
          <Route path={`${match.path}/index.html`}>
            <TitleBar title="index.html" />
          </Route>
        </Switch>
        <main className={styles.CodeEditor__Main}>
          <ActivityBar activeItem={activeItem} setActiveItem={setActiveItem} />
          {activeItem ? <SideBar activeItem={activeItem} /> : null}
          <Switch>
            <Route path={`${match.path}/readme.md`} component={Editor} />
            <Route path={`${match.path}/hireme.tsx`} component={Editor} />
            <Route path={`${match.path}/index.html`} component={Editor} />
          </Switch>
        </main>
        <StatusBar />
      </div>
    </div>
  );
};

export default CodeEditor;
