import React, { FC, useRef } from 'react';
import { motion } from 'framer-motion';

import { Accessories } from '../../../../models';

import styles from './Accessory.module.scss';

interface AccessoryProps {
  name: Accessories;
  icon?: boolean;
  selectAccessory?: (name: Accessories) => void;
  isSelected?: boolean;
}

const Accessory: FC<AccessoryProps> = ({ icon, name, selectAccessory, isSelected }) => {
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
    <div
      onClick={onAccessoryClick}
      className={[
        styles.AccessoryContainer,
        styles[`Icon__${className}`],
        isSelected ? styles.Selected : '',
      ].join(' ')}>
      <img src={source} alt={`accessoire ${name}`} />
    </div>
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
