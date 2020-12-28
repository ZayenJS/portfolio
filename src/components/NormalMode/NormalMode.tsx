import React, { FC } from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router-dom';

import Layout from '../Layout/Layout';
import Home from './Home/Home';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';
import Contact from './Contact/Contact';

import { projs } from '../../data';

import styles from './NormalMode.module.scss';

interface NormalModeProps extends RouteComponentProps {
  setIsDevMode: () => void;
}

const NormalMode: FC<NormalModeProps> = ({ setIsDevMode }) => {
  return (
    <div className={[styles.NormalMode, 'normal'].join(' ')}>
      <Layout isDevMode={false} setIsDevMode={setIsDevMode} isNormalMode={true}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/projets"
            render={(routeProps) => <Projects {...routeProps} projects={projs} />}
          />
          <Route path="/competences" component={Skills} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Layout>
    </div>
  );
};

export default NormalMode;
