import React, { FC, useEffect, useRef, useState } from 'react';
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
  const [loaded, setLoaded] = useState(false);
  const constraint = useRef(document.getElementById('main'));

  useEffect(() => {
    if (!loaded) {
      setLoaded(true);
      constraint.current = document.getElementById('main');
    }
  });

  const source = require(`../../../../assets/images/accessories/${name}.png`);

  const className = name
    .split('-')
    .map((name) => name[0].toUpperCase() + name.slice(1))
    .join('');

  const onAccessoryClick = () => {
    if (selectAccessory) selectAccessory(name);
  };

  if (icon)
    return (
      <div
        onClick={onAccessoryClick}
        className={[
          styles.AccessoryContainer,
          styles[`Icon__${className}`],
          isSelected ? styles.Selected : '',
        ].join(' ')}>
        <img src={source} alt={`accessoire ${name}`} />
      </div>
    );

  return (
    <motion.img
      drag
      dragConstraints={constraint}
      className={[styles.Accessory, styles[className]].join(' ')}
      src={source}
      alt=""
    />
  );
};

export default Accessory;
