import { FC } from 'react';

import classes from './Backdrop.module.scss';
interface BackdropProps {
  onClick?: () => void;
}

const Backdrop: FC<BackdropProps> = ({ onClick }) => {
  return <div onClick={onClick} className={classes.Backdrop}></div>;
};

export default Backdrop;
