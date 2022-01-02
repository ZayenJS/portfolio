import { FC, useEffect, useState } from 'react';
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
  const [state, setState] = useState({ isTyped: false, typing: true });

  useEffect(() => {
    if (state.isTyped && !state.typing) {
      // between 100ms and 400ms
      const timeoutTime = Math.floor(Math.random() * (400 - 100) + 100);

      const timeout = setTimeout(() => {
        onStringTyped();
      }, timeoutTime);

      return () => clearTimeout(timeout);
    }
  }, [onStringTyped, state.isTyped, state.typing]);

  const stringTypedHandler = () => {
    setState((ps) => ({ ...ps, isTyped: true, typing: false }));
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
