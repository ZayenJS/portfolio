import React, { FC } from 'react';

import styles from './Intro.module.scss';

interface IntroProps {
  onIntroEnd: () => void;
}

const Intro: FC<IntroProps> = ({ onIntroEnd }) => {
  return (
    <div className={styles.Intro}>
      <div onAnimationEnd={onIntroEnd} className={styles.Intro__Left}>
        <span>&lsaquo;</span>
      </div>
      <span className={styles.Intro__Middle}>/</span>
      <div onAnimationEnd={onIntroEnd} className={styles.Intro__Right}>
        <span>&rsaquo;</span>
      </div>
    </div>
  );
};

export default Intro;
