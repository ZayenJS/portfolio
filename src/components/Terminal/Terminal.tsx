import React, { FC } from 'react';
import styles from './Terminal.module.scss';
import TerminalHeader from './TerminalHeader/TerminalHeader';

interface TerminalProps {
  chooseMode: (shouldKeepDevMode: boolean) => void;
}

const Terminal: FC<TerminalProps> = ({ chooseMode }) => {
  return (
    <div className={styles.Terminal}>
      <TerminalHeader chooseMode={() => chooseMode(true)} />
      <main className={styles.Terminal__Main}></main>
    </div>
  );
};

export default Terminal;
