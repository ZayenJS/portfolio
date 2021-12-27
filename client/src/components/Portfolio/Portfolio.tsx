import React, { FC, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import NormalMode from '../NormalMode/NormalMode';
import Desktop from '../Desktop/Desktop';
import Terminal from '../Terminal/Terminal';

import styles from './Portfolio.module.scss';

interface PortfolioProps extends RouteComponentProps {}

const Portfolio: FC<PortfolioProps> = ({ history, location, match }) => {
  const [state, setState] = useState({
    startUnmountAnimation: false,
    isDevMode: false,
    hasChosen: false,
  });

  const choiceHandler = (shouldActivateDevMode: boolean) => {
    setState((prevState) => ({
      ...prevState,
      isDevMode: shouldActivateDevMode,
      hasChosen: shouldActivateDevMode,
      startUnmountAnimation: true,
    }));

    if (shouldActivateDevMode) history.push('/code/readme.md');
  };

  const setMode = () => {
    setState((prevState) => ({ ...prevState, hasChosen: true }));
    history.push('/');
  };

  if (!state.hasChosen) {
    return (
      <div
        className={
          state.startUnmountAnimation && !state.isDevMode
            ? styles.Portfolio__Unmount
            : styles.Portfolio
        }
        onAnimationEnd={setMode}>
        <Desktop history={history} location={location} match={match} />
        <Terminal shouldActivateDevMode={choiceHandler} />
      </div>
    );
  }

  if (state.hasChosen && state.isDevMode) {
    return (
      <div className={styles.Portfolio}>
        <Desktop history={history} location={location} match={match} isDevMode={true} />
      </div>
    );
  }

  if (state.hasChosen && !state.isDevMode) {
    return (
      <NormalMode
        history={history}
        location={location}
        match={match}
        setIsDevMode={() => setState({ ...state, isDevMode: true })}
      />
    );
  }

  return null;
};

export default Portfolio;
