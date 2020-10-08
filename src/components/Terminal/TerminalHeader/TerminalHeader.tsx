import React, { FC } from 'react';
import Tab from './Tab/Tab';
import styles from './TerminalHeader.module.scss';

interface TerminalHeaderProps {
  shouldActivateDevMode: () => void;
}

const TerminalHeader: FC<TerminalHeaderProps> = ({ shouldActivateDevMode }) => {
  return (
    <div className={styles.TerminalHeader}>
      <div className={styles.TerminalHeader__Tabs}>
        <Tab shouldActivateDevMode={shouldActivateDevMode} />
        <span title="Nouvel Onglet" className={styles.TerminalHeader__Tabs__NewTab}>
          +
        </span>
        <span title="Nouvel Onglet" className={styles.TerminalHeader__Tabs__NewTab}></span>
      </div>
      <div className={styles.TerminalHeader__Controls}>
        <span className={styles.TerminalHeader__Controls__Minimize}></span>
        <span className={styles.TerminalHeader__Controls__Maximize}></span>
        <span
          onClick={shouldActivateDevMode}
          className={styles.TerminalHeader__Controls__Close}></span>
      </div>
    </div>
  );
};

export default TerminalHeader;
