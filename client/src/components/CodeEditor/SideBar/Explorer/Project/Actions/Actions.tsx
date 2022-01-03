import React, { FC } from 'react';
import classes from './Actions.module.scss';

interface ActionsProps {}

const Actions: FC<ActionsProps> = () => {
  return (
    <div className={classes.Actions}>
      <span title="New File" className={classes.Actions__CreateFile}></span>
      <span title="New Folder" className={classes.Actions__CreateFolder}></span>
      <span title="Refresh Explorer" className={classes.Actions__Refresh}></span>
      <span title="Collapse Folders In Explorer" className={classes.Actions__Collapse}></span>
    </div>
  );
};

export default Actions;
