import { FC, useState } from 'react';
import ReactTyped from 'react-typed';

import Path from '../Path/Path';

import styles from './TerminalLine.module.scss';

interface TerminalLineProps {
  owner: string;
  path: string;
  machineName: string;
  typedStrings: string[];
  typeSpeed: number;
  startDelay?: number;
  onStringTyped: () => void;
  onStringTypedDelay: number;
}

const TerminalLine: FC<TerminalLineProps> = ({
  owner,
  path,
  machineName,
  typedStrings,
  typeSpeed,
  startDelay = 0,
  onStringTyped,
}) => {
  const [state, setState] = useState({ isTyped: false });

  const stringTypedHandler = () => {
    // between 400ms and 1000ms
    const timeout = Math.floor(Math.random() * (1000 - 400) + 400);

    setTimeout(() => {
      onStringTyped();
      setState((ps) => ({ ...ps, isTyped: true }));
    }, timeout);
  };

  return (
    <div className={styles.Container}>
      <Path owner={owner} path={path} machineName={machineName} />
      <div className={styles.Line}>
        <span>$</span>
        {state.isTyped ? (
          <p>{typedStrings}</p>
        ) : (
          <ReactTyped
            strings={typedStrings}
            typeSpeed={typeSpeed}
            startDelay={startDelay}
            onStringTyped={stringTypedHandler}
            contentType={null}
            cursorChar="_"
            showCursor
          />
        )}
      </div>
    </div>
  );
};

export default TerminalLine;
