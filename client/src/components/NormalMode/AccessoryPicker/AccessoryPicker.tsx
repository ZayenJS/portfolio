import { motion } from 'framer-motion';
import React, { FC, FormEvent, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAccessories } from '../../../hooks/useAccessories';
import { Accessories } from '../../../models';
import Backdrop from '../../Backdrop/Backdrop';
import Accessory from './Accessory/Accessory';

import styles from './AccessoryPicker.module.scss';
interface AccessoryPickerProps {
  hideAccessoryPicker: () => void;
}

interface AccessoryPickerState {
  selectedAccessories: Accessories[];
  isDraggable: boolean;
  isMouseDown: boolean;
}

const AccessoryPicker: FC<AccessoryPickerProps> = ({ hideAccessoryPicker }) => {
  const dragConstraints = useRef<HTMLElement>(document.body);
  const { accessories, selectedAccessories, removeAllAccessories, setAccessories } =
    useAccessories();
  const [state, setState] = useState<AccessoryPickerState>({
    selectedAccessories,
    isDraggable: false,
    isMouseDown: false,
  });

  const selectAccessory = (name: Accessories) => {
    const alreadyExist = state.selectedAccessories.find((accessory) => accessory === name);
    if (!alreadyExist) {
      return setState((prevState) => ({
        ...prevState,
        selectedAccessories: [...state.selectedAccessories, name],
      }));
    }
    setState((prevState) => ({
      ...prevState,
      selectedAccessories: state.selectedAccessories.filter((accessory) => accessory !== name),
    }));
  };

  const onFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    setAccessories(state.selectedAccessories);
    hideAccessoryPicker();
  };

  const removeAll = () => {
    setState((prevState) => ({ ...prevState, selectedAccessories: [] }));
    removeAllAccessories();
    hideAccessoryPicker();
  };

  let message = 'Choisir';

  message +=
    state.selectedAccessories.length > 1
      ? ` ces ${state.selectedAccessories.length} accessoires`
      : ' cet accessoire';

  if (!state.selectedAccessories.length) message = "Ne pas choisir d'accessoire";

  const mouseDownHandler = (event: React.MouseEvent) => {
    if ((event.target as HTMLDivElement).classList[0]?.includes('Cross')) {
      return setState((prevState) => ({ ...prevState, isMouseDown: true, isDraggable: false }));
    }
    setState((prevState) => ({ ...prevState, isMouseDown: true }));
  };

  const setDraggable = () => {
    if (!state.isMouseDown) {
      return setState((prevState) => ({ ...prevState, isDraggable: false }));
    }
  };

  return (
    <>
      <Backdrop onBackdropClick={hideAccessoryPicker} />
      <div className={styles.AccessoryPicker}>
        <motion.form
          drag={state.isDraggable}
          dragConstraints={dragConstraints}
          dragMomentum={false}
          onSubmit={onFormSubmit}>
          <header
            style={state.isMouseDown ? { cursor: 'grabbing' } : {}}
            onMouseDown={mouseDownHandler}
            onMouseUp={() => setState((prevState) => ({ ...prevState, isMouseDown: false }))}
            onMouseEnter={() => setState((prevState) => ({ ...prevState, isDraggable: true }))}
            onMouseLeave={setDraggable}>
            <div>Choix des accessoires</div>
            <div className={styles.Cross} onClick={hideAccessoryPicker}>
              <span>✖</span>
            </div>
          </header>
          <>
            <fieldset>
              {accessories.map((accessory) => (
                <Accessory
                  key={accessory}
                  selectAccessory={selectAccessory}
                  isSelected={state.selectedAccessories.includes(accessory)}
                  icon={true}
                  name={accessory}
                />
              ))}
            </fieldset>
            <div className={styles.ButtonsContainer}>
              <button type="submit">{message}</button>
              <button type="button" onClick={removeAll}>
                Enlever tout
              </button>
            </div>
          </>
        </motion.form>
      </div>
    </>
  );
};

export default AccessoryPicker;
