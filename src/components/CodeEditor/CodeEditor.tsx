import React, { FC, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { ActivityBarItemName } from '../../models';
import ActivityBar from './ActivityBar/ActivityBar';

import styles from './CodeEditor.module.scss';
import Editor from './Editor/Editor';
import SideBar from './SideBar/SideBar';
import StatusBar from './StatusBar/StatusBar';
import TitleBar from './TitleBar/TitleBar';

interface CodeEditorProps extends RouteComponentProps {}

const CodeEditor: FC<CodeEditorProps> = ({ match }) => {
  // const [isMinimized, setIsMinimized] = useState(false);
  // const [isMaximized, setIsMaximized] = useState(false);
  const [activeItem, setActiveItem] = useState<ActivityBarItemName>('explorer');

  return (
    <div className={styles.CodeEditor}>
      <div className={styles.CodeEditor__Content}>
        <TitleBar title="README.md" />
        <main className={styles.CodeEditor__Main}>
          <ActivityBar activeItem={activeItem} setActiveItem={setActiveItem} />
          {activeItem ? <SideBar activeItem={activeItem} /> : null}
          <Editor />
        </main>
        <StatusBar />
      </div>
      {/* <Switch>
        <Route exact path={`${match.path}/`} component={BlankPage} />
        <Route path={`${match.path}/readme.md`} component={ReadmePage} />
      </Switch> */}
    </div>
  );
};

export default CodeEditor;
