import React, { FC } from 'react';
import styles from './Terminal.module.scss';

interface TerminalProps {
  chooseMode: (shouldKeepDevMode: boolean) => void;
}

const Terminal: FC<TerminalProps> = ({ chooseMode }) => {
  return (
    <div className={styles.Terminal}>
      Terminal Component
      <button onClick={() => chooseMode(true)}>dev mode</button>
      <button onClick={() => chooseMode(false)}>basic mode</button>
    </div>
  );
};

export default Terminal;
