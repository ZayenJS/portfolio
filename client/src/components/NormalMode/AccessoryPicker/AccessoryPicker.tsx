import { motion } from 'framer-motion';
import React, { FC, FormEvent, useRef, useState } from 'react';
import { useAccessories } from '../../../hooks/useAccessories';
import { Accessory as AccessoryModel } from '../../../models';
import Backdrop from '../../Backdrop/Backdrop';
import CloseCross from '../../CloseCross/CloseCross';
import Accessory from './Accessory/Accessory';

import classes from './AccessoryPicker.module.scss';
interface AccessoryPickerProps {
  hideAccessoryPicker: () => void;
}

interface AccessoryPickerState {
  selectedAccessories: AccessoryModel[];
  isDraggable: boolean;
  isMouseDown: boolean;
}

const AccessoryPicker: FC<AccessoryPickerProps> = ({ hideAccessoryPicker }) => {
  const dragConstraints = useRef<HTMLElement>(document.body);
  const { accessories, selectedAccessories, setAccessories } = useAccessories();
  const [state, setState] = useState<AccessoryPickerState>({
    selectedAccessories,
    isDraggable: false,
    isMouseDown: false,
  });

  const selectAccessory = (selectedAccessory: AccessoryModel) => {
    const alreadyExist = state.selectedAccessories.find(
      (accessory) => accessory.name === selectedAccessory.name,
    );
    if (!alreadyExist) {
      return setState((prevState) => ({
        ...prevState,
        selectedAccessories: [...state.selectedAccessories, selectedAccessory],
      }));
    }
    setState((prevState) => ({
      ...prevState,
      selectedAccessories: state.selectedAccessories.filter(
        (accessory) => accessory.name !== selectedAccessory.name,
      ),
    }));
  };

  const onFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    setAccessories(state.selectedAccessories);
    hideAccessoryPicker();
  };

  const removeAll = () => {
    setState((prevState) => ({ ...prevState, selectedAccessories: [] }));
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
      <Backdrop />
      <div className={classes.Container}>
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
            <h3 className={classes.Title}>Choix des accessoires</h3>
            <CloseCross className={classes.Cross} onClose={hideAccessoryPicker} fat windowed />
          </header>
          <>
            <fieldset>
              {accessories.map((accessory) => (
                <Accessory
                  key={accessory.name}
                  type={accessory.type}
                  selectAccessory={selectAccessory}
                  isSelected={state.selectedAccessories
                    .map((el) => el.name)
                    .includes(accessory.name)}
                  icon={true}
                  name={accessory.name}
                  selectedAccessories={state.selectedAccessories}
                />
              ))}
            </fieldset>
            <div className={classes.ButtonsContainer}>
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
