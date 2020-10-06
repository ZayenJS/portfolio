import React, { FC } from 'react';

import tux from '../../../../assets/images/icons/Tux.svg';

import styles from './Tab.module.scss';

interface TabProps {
  chooseMode: () => void;
}

const Tab: FC<TabProps> = ({ chooseMode }) => {
  return (
    <div className={styles.Tab}>
      <div className={styles.Tab__Title}>
        <span>
          <img src={tux} alt="" />
        </span>
        <span>~/Desktop</span>
      </div>
      <div onClick={chooseMode} className={styles.Tab__Close}></div>
    </div>
  );
};

export default Tab;
