import React, { FC, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Basic from '../Basic/Basic';
import Desktop from '../Desktop/Desktop';
import Terminal from '../Terminal/Terminal';

import styles from './Portfolio.module.scss';

interface PortfolioProps extends RouteComponentProps {}

const Portfolio: FC<PortfolioProps> = ({ history, location, match }) => {
  const [state, setState] = useState({
    startUnmountAnimation: false,
    isDevMode: false,
    hasChosen: true,
  });

  const choiceHandler = (shouldActivateDevMode: boolean) => {
    setState((prevState) => ({
      ...prevState,
      isDevMode: shouldActivateDevMode,
      hasChosen: shouldActivateDevMode ? true : false,
      startUnmountAnimation: true,
    }));

    if (shouldActivateDevMode) history.push('/code/readme.md');
  };

  const setMode = () => {
    setState((prevState) => ({ ...prevState, hasChosen: true }));
    history.push('/');
  };

  let content = null;

  if (!state.hasChosen) {
    content = (
      <div
        className={
          state.startUnmountAnimation && !state.isDevMode
            ? styles.Portfolio__Unmount
            : styles.Portfolio
        }
        onAnimationEnd={setMode}>
        <Desktop
          style={{ filter: 'blur(5px)' }}
          history={history}
          location={location}
          match={match}
        />
        <Terminal shouldActivateDevMode={choiceHandler} />
      </div>
    );
  } else if (state.hasChosen && state.isDevMode) {
    content = (
      <div className={styles.Portfolio}>
        <Desktop history={history} location={location} match={match} isDevMode={true} />
      </div>
    );
  } else if (state.hasChosen && !state.isDevMode) {
    content = <Basic history={history} location={location} match={match} />;
  }

  return content;
};

export default Portfolio;
