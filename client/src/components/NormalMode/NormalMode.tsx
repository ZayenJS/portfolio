import { FC } from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Layout from '../Layout/Layout';
import Home from './Home/Home';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';
import Contact from './Contact/Contact';

import { projs } from '../../data';

import classes from './NormalMode.module.scss';

interface NormalModeProps extends RouteComponentProps {}

const NormalMode: FC<NormalModeProps> = ({ location }) => {
  return (
    <div className={[classes.NormalMode, 'normal'].join(' ')}>
      <Layout>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route key="/" exact path="/" render={() => <Home />} />
            {/*
              // TODO: load projects from backend && implement backend (CRUD)
            */}
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
