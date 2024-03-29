import { motion } from 'framer-motion';
import { FC, useState } from 'react';

import Accessory from '../NormalMode/AccessoryPicker/Accessory/Accessory';
import AccessoryPicker from '../NormalMode/AccessoryPicker/AccessoryPicker';
import Portal from '../Portal/Portal';

import classes from './InteractivePicture.module.scss';
import { useAccessories } from '../../hooks/useAccessories';
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

  const { selectedAccessories } = useAccessories();

  return (
    <motion.section className={classes.InteractivePicture}>
      <div className={classes.Image_Container}>
        <img className={classes.Picture} src={src} alt="" />
        {selectedAccessories.map((accessory) => (
          <Accessory key={accessory.name} type={accessory.type} name={accessory.name} />
        ))}
      </div>
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
        className={state.isChangeAccessoryButtonHovered ? classes.Animate : ''}
        onMouseEnter={() =>
          setState((prevState) => ({ ...prevState, isChangeAccessoryButtonHovered: true }))
        }
        onAnimationEnd={() =>
          setState((prevState) => ({ ...prevState, isChangeAccessoryButtonHovered: false }))
        }
        onClick={() => setState({ ...state, isAccessoriesPickerVisible: true })}>
        <div className={classes.Button_Text}>Changer d'accessoires</div>
        <span className={classes.Arrow}>&larr;</span>
        <span className={classes.Arrow}>&rarr;</span>
      </button>
    </motion.section>
  );
};

export default InteractivePicture;
