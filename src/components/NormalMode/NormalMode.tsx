import React, { FC } from 'react';
import { Route, RouteComponentProps, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

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
  const location = useLocation();

  return (
    <div className={[styles.NormalMode, 'normal'].join(' ')}>
      <Layout isDevMode={false} setIsDevMode={setIsDevMode} isNormalMode={true}>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route key="/" exact path="/" render={() => <Home />} />
            <Route
              key="/projets"
              path="/projets"
              render={(routeProps) => <Projects {...routeProps} projects={projs} />}
            />
            <Route path="/competences" component={Skills} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </AnimatePresence>
      </Layout>
    </div>
  );
};

export default NormalMode;
