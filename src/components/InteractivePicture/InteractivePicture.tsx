import { motion } from 'framer-motion';
import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';

import Accessory from '../NormalMode/AccessoryPicker/Accessory/Accessory';
import AccessoryPicker from '../NormalMode/AccessoryPicker/AccessoryPicker';
import Portal from '../Portal/Portal';

import { State } from '../../store/reducers';

import styles from './InteractivePicture.module.scss';
interface InteractivePictureProps {
  src: string;
}

interface InteractivePictureState {
  isAccessoriesPickerVisible: boolean;
  isChangeAccessoryButtonHovered: boolean;
}

const InteractivePicture: FC<InteractivePictureProps> = ({ src }) => {
  const [state, setState] = useState<InteractivePictureState>({
    isAccessoriesPickerVisible: false,
    isChangeAccessoryButtonHovered: false,
  });

  const { selectedAccessories } = useSelector((state: State) => state.normalMode.global);

  return (
    <motion.section className={styles.InteractivePicture}>
      <img className={styles.Picture} src={src} alt="" />
      {selectedAccessories.map((accessory) => (
        <Accessory key={accessory} name={accessory} />
      ))}
      <Portal>
        <div
          style={
            state.isAccessoriesPickerVisible ? {} : { opacity: 0, pointerEvents: 'none', zIndex: 0 }
          }>
          <AccessoryPicker
            hideAccessoryPicker={() =>
              setState((prevState) => ({ ...prevState, isAccessoriesPickerVisible: false }))
            }
          />
        </div>
      </Portal>

      <button
        title="Changer les accessoires"
        className={state.isChangeAccessoryButtonHovered ? styles.Spin : ''}
        onMouseEnter={() =>
          setState((prevState) => ({ ...prevState, isChangeAccessoryButtonHovered: true }))
        }
        onAnimationEnd={() =>
          setState((prevState) => ({ ...prevState, isChangeAccessoryButtonHovered: false }))
        }
        onClick={() => setState({ ...state, isAccessoriesPickerVisible: true })}>
        <span className={styles.Arrow}>&larr;</span>
        <span className={styles.Arrow}>&rarr;</span>
      </button>
    </motion.section>
  );
};

export default InteractivePicture;
