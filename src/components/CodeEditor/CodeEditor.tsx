import React, { FC } from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router-dom';
import ActivityBar from './ActivityBar/ActivityBar';

import styles from './CodeEditor.module.scss';
import Editor from './Editor/Editor';
import SideBar from './SideBar/SideBar';
import StatusBar from './StatusBar/StatusBar';
import TitleBar from './TitleBar/TitleBar';

interface CodeEditorProps extends RouteComponentProps {}

const CodeEditor: FC<CodeEditorProps> = ({ match }) => {
  return (
    <div className={styles.CodeEditor}>
      <div className={styles.CodeEditor__Content}>
        <TitleBar title="README.md - Mon Portfolio" />
        <main className={styles.CodeEditor__Main}>
          <ActivityBar />
          <SideBar />
          <Editor />
        </main>
        <StatusBar />
      </div>
      {/* <Switch>
        <Route path={`${match.path}/welcome`}></Route>
      </Switch> */}
    </div>
  );
};

export default CodeEditor;
