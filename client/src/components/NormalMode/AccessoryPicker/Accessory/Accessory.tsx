import { FC, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

import { Accessory as AccessoryModel, AccessoryName, AccessoryType } from '../../../../models';

import classes from './Accessory.module.scss';

interface AccessoryProps {
  name: AccessoryName;
  type: AccessoryType;
  icon?: boolean;
  selectAccessory?: (selectedAccessory: AccessoryModel) => void;
  isSelected?: boolean;
  selectedAccessories?: AccessoryModel[];
}

const Accessory: FC<AccessoryProps> = ({
  icon,
  type,
  name,
  selectAccessory,
  selectedAccessories,
  isSelected,
}) => {
  const [loaded, setLoaded] = useState(false);
  const constraint = useRef(document.getElementById('main'));

  useEffect(() => {
    if (!loaded) {
      setLoaded(true);
      constraint.current = document.getElementById('main');
    }
  }, [loaded]);

  const source = require(`../../../../assets/images/accessories/${name}.png`);

  const nameClassName = name
    .split('-')
    .map((name) => name[0].toUpperCase() + name.slice(1))
    .join('');

  const onAccessoryClick = () => {
    if (type) selectAccessory?.({ type, name });
  };

  if (icon) {
    let disabled = false;

    selectedAccessories?.forEach((el) => {
      if (type !== AccessoryType.MISC && type === el.type && name !== el.name) disabled = true;
    });

    return (
      <div
        onClick={disabled ? () => null : onAccessoryClick}
        className={[
          classes.AccessoryContainer,
          classes[`Icon__${type.toString()}`],
          classes[`Icon__${nameClassName}`],
          isSelected ? classes.Selected : '',
          disabled ? classes.Disabled : '',
        ].join(' ')}>
        <img src={source} alt={`accessoire ${name}`} />
      </div>
    );
  }

  return (
    <motion.img
      drag
      dragConstraints={constraint}
      className={[classes.Accessory, classes[nameClassName]].join(' ')}
      src={source}
      alt=""
    />
  );
};

export default Accessory;
