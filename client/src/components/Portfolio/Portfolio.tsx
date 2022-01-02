import { FC, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import NormalMode from '../NormalMode/NormalMode';
import Desktop from '../Desktop/Desktop';
import Terminal from '../Terminal/Terminal';

import classes from './Portfolio.module.scss';
import { useMode } from '../../hooks/useMode';
import { Mode } from '../../models';

interface PortfolioProps extends RouteComponentProps {}

const Portfolio: FC<PortfolioProps> = ({ history, location, match }) => {
  const { mode, changeMode } = useMode();
  const [animate, setAnimate] = useState(false);

  const choiceHandler = (activateDevMode: boolean) => {
    if (activateDevMode) {
      history.push('/code/readme.md');
      changeMode(Mode.DEV);
      return;
    }

    setAnimate(true);
  };

  const setMode = () => {
    history.push('/');
    changeMode(Mode.NORMAL);
  };

  if (mode === Mode.NONE) {
    return (
      <div
        className={`${classes.Portfolio} ${animate ? classes.Unmount : ''}`}
        onAnimationEnd={setMode}>
        <Desktop history={history} location={location} match={match} />
        <Terminal activateDevMode={choiceHandler} />
      </div>
    );
  }

  if (mode === Mode.DEV) {
    return (
      <div className={classes.Portfolio}>
        <Desktop history={history} location={location} match={match} />
      </div>
    );
  }

  if (mode === Mode.NORMAL) {
    return <NormalMode history={history} location={location} match={match} />;
  }

  return null;
};

export default Portfolio;
