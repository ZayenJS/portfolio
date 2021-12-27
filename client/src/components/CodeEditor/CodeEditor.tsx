import { FC, useMemo, useState } from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router-dom';
import Draggable from 'react-draggable';

import ActivityBar from './ActivityBar/ActivityBar';
import Editor from './Editor/Editor';
import SideBar from './SideBar/SideBar';
import StatusBar from './StatusBar/StatusBar';
import TitleBar from './TitleBar/TitleBar';

import { ActivityBarItemName } from '../../models';

import classes from './CodeEditor.module.scss';
import { StringUtil } from '../../utils/StringUtil';

interface CodeEditorProps extends RouteComponentProps {}

const CodeEditor: FC<CodeEditorProps> = ({ match }) => {
  const [activeItem, setActiveItem] = useState<ActivityBarItemName>('explorer');

  const id = useMemo(() => `_${StringUtil.makeid(37)}`, []);

  return (
    <Draggable handle={`#${id}`}>
      <section className={classes.CodeEditor}>
        <div className={classes.CodeEditor__Content}>
          <header id={id}>
            <Switch>
              <Route exact path={`${match.path}`}>
                <TitleBar title="" />
              </Route>
              <Route path={`${match.path}/readme.md`}>
                <TitleBar title="README.md" />
              </Route>
              <Route path={`${match.path}/contactme.tsx`}>
                <TitleBar title="ContactMe.tsx" />
              </Route>
              <Route path={`${match.path}/index.html`}>
                <TitleBar title="index.html" />
              </Route>
            </Switch>
          </header>
          <main className={classes.CodeEditor__Main}>
            <ActivityBar activeItem={activeItem} setActiveItem={setActiveItem} />
            {activeItem ? <SideBar activeItem={activeItem} /> : null}
            <Switch>
              <Route path={`${match.path}/readme.md`} component={Editor} />
              <Route path={`${match.path}/contactme.tsx`} component={Editor} />
              <Route path={`${match.path}/index.html`} component={Editor} />
            </Switch>
          </main>
          <StatusBar />
        </div>
      </section>
    </Draggable>
  );
};

export default CodeEditor;
