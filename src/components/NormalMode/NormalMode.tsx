import React, { FC, useState } from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router-dom';

import Intro from './Intro/Intro';
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
  const [state, setState] = useState({
    isIntroEnded: false,
  });

  const onIntroEnd = () => {
    setState({ ...state, isIntroEnded: true });
  };

  return (
    <div className={[styles.NormalMode, 'normal'].join(' ')}>
      {state.isIntroEnded ? null : <Intro onIntroEnd={onIntroEnd} />}
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