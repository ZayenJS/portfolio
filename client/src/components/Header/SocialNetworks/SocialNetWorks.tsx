import React, { FC } from 'react';

import styles from './SocialNetWorks.module.scss';

interface SocialNetWorksProps {}

const SocialNetWorks: FC<SocialNetWorksProps> = () => {
  return (
    <ul className={styles.SocialNetWorks}>
      <li className={styles.SocialNetWorks__Malt}>
        <a
          href="https://www.malt.fr/profile/davidnogueira"
          rel="noreferrer noopener"
          target="_blank">
          Malt <span></span>
        </a>
      </li>
      <li className={styles.SocialNetWorks__Github}>
        <a href="https://github.com/ZayenJS" rel="noreferrer noopener" target="_blank">
          Github <span></span>
        </a>
      </li>
      <li className={styles.SocialNetWorks__Twitter}>
        <a href="https://twitter.com/ZayenJS" rel="noreferrer noopener" target="_blank">
          Twitter <span></span>
        </a>
      </li>
    </ul>
  );
};

export default SocialNetWorks;
