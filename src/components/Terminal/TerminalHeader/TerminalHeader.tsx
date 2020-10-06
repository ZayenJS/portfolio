import React, { FC } from 'react';
import Tab from './Tab/Tab';
import styles from './TerminalHeader.module.scss';

interface TerminalHeaderProps {
  chooseMode: () => void;
}

const TerminalHeader: FC<TerminalHeaderProps> = ({ chooseMode }) => {
  return (
    <div className={styles.TerminalHeader}>
      <div className={styles.TerminalHeader__Tabs}>
        <Tab chooseMode={chooseMode} />
        <span>+</span>
        <span className={styles.TerminalHeader__Tabs__NewTab}></span>
      </div>
      <div className={styles.TerminalHeader__Controls}>
        <span className={styles.TerminalHeader__Controls__Minimize}></span>
        <span className={styles.TerminalHeader__Controls__Maximize}></span>
        <span onClick={chooseMode} className={styles.TerminalHeader__Controls__Close}></span>
      </div>
    </div>
  );
};

export default TerminalHeader;
