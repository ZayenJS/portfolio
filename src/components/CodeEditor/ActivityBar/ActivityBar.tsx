import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-regular-svg-icons';
import { faCodeBranch, faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from './ActivityBar.module.scss';

interface ActivityBarProps {}

const ActivityBar: FC<ActivityBarProps> = () => {
  return (
    <div className={styles.ActivityBar}>
      <ul className={styles.ActivityBar__Actions}>
        <li className={styles.ActivityBar__Actions__Explorer}>
          <FontAwesomeIcon icon={faCopy} size="1x" />
        </li>
        <li className={styles.ActivityBar__Actions__Search}></li>
        <li className={styles.ActivityBar__Actions__GitBranch}></li>
        <li className={styles.ActivityBar__Actions__Debug}></li>
        <li className={styles.ActivityBar__Actions__Bookmark}></li>
      </ul>
      <ul className={styles.ActivityBar__Actions}>
        <li className={styles.ActivityBar__Actions__Profile}></li>
        <li className={styles.ActivityBar__Actions__Settings}></li>
      </ul>
    </div>
  );
};

export default ActivityBar;

//Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
