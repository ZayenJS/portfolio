import React, { FC, useState } from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router-dom';
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
          {/* <Editor /> */}
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
