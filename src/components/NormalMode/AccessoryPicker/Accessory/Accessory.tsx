import React, { FC, useRef } from 'react';
import { motion } from 'framer-motion';

import { Accessories } from '../AccessoryPicker';

import styles from './Accessory.module.scss';

interface AccessoryProps {
  name: Accessories;
  selectAccessory?: (newAccessoryName: Accessories) => void;
  icon?: boolean;
  isSelected?: boolean;
}

const Accessory: FC<AccessoryProps> = ({ icon, name, isSelected, selectAccessory }) => {
  const constraintsRef = useRef<HTMLElement>(document.body);
  const source = require(`../../../../assets/images/accessories/${name}.png`);

  const className = name
    .split('-')
    .map((name) => name[0].toUpperCase() + name.slice(1))
    .join('');

  const onAccessoryClick = () => {
    if (selectAccessory) selectAccessory(name);
  };

  return icon ? (
    <img
      className={[styles[`Icon__${className}`], isSelected ? styles.Selected : ''].join(' ')}
      onClick={onAccessoryClick}
      src={source}
      alt=""
    />
  ) : (
    <motion.img
      drag
      dragConstraints={constraintsRef}
      className={[styles.Accessory, styles[className]].join(' ')}
      src={source}
      alt=""
    />
  );
};

export default Accessory;
