import React, { FC } from 'react';

import styles from './Backdrop.module.scss';
interface BackdropProps {
  onBackdropClick: () => void;
}

const Backdrop: FC<BackdropProps> = ({ onBackdropClick }) => {
  return <div onClick={onBackdropClick} className={styles.Backdrop}></div>;
};

export default Backdrop;
