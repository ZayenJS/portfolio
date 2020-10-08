import React, { FC, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Desktop from '../Desktop/Desktop';
import Terminal from '../Terminal/Terminal';

import styles from './Portfolio.module.scss';

interface PortfolioProps extends RouteComponentProps {}

const Portfolio: FC<PortfolioProps> = ({ history, location, match }) => {
  const [isDevMode, setIsDevMode] = useState(false);
  const [hasChosen, setHasChosen] = useState(false);

  const choiceHandler = (shouldActivateDevMode: boolean) => {
    setIsDevMode(shouldActivateDevMode);
    setHasChosen(true);
  };

  let content = null;

  if (!hasChosen) {
    content = (
      <>
        <Desktop
          style={{ filter: 'blur(5px)' }}
          history={history}
          location={location}
          match={match}
        />
        <Terminal shouldActivateDevMode={choiceHandler} />
      </>
    );
  } else if (hasChosen && isDevMode) {
    content = <Desktop history={history} location={location} match={match} isDevMode={true} />;
  } else if (hasChosen && !isDevMode) {
    content = <div>basic portfolio</div>;
  }

  return content;
};

export default Portfolio;
