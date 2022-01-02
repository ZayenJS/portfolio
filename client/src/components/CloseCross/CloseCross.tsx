import { FC } from 'react';

import classes from './CloseCross.module.scss';

export interface CloseCrossProps {
  onClose: () => void;
}

const CloseCross: FC<CloseCrossProps> = ({ onClose }) => {
  return <div onClick={onClose} className={classes.Container}></div>;
};

export default CloseCross;
