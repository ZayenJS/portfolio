import { FC } from 'react';

import classes from './CloseCross.module.scss';

export interface CloseCrossProps {
  className?: string;
  fat?: boolean;
  windowed?: boolean;
  onClose: () => void;
}

const CloseCross: FC<CloseCrossProps> = ({ onClose, fat, windowed, className }) => {
  return (
    <div
      onClick={onClose}
      className={`${classes.Container} ${className ?? ''} ${fat ? classes.Fat : ''} ${
        windowed ? classes.Windowed : ''
      }`}
    />
  );
};

export default CloseCross;
