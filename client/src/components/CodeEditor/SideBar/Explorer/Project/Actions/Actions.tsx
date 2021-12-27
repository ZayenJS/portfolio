import React, { FC } from 'react';
import styles from './Actions.module.scss';

interface ActionsProps {}

const Actions: FC<ActionsProps> = () => {
  return (
    <div className={styles.Actions}>
      <span title="New File" className={styles.Actions__CreateFile}></span>
      <span title="New Folder" className={styles.Actions__CreateFolder}></span>
      <span title="Refresh Explorer" className={styles.Actions__Refresh}></span>
      <span title="Collapse Folders In Explorer" className={styles.Actions__Collapse}></span>
    </div>
  );
};

export default Actions;
