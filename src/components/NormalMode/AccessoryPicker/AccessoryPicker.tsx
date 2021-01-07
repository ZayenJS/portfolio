import React, { FC, FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Accessories } from '../../../models';
import { removeAllAccessories, setAccessories } from '../../../store/actions/normalMode';
import { State } from '../../../store/reducers';
import Backdrop from '../../Backdrop/Backdrop';
import Accessory from './Accessory/Accessory';

import styles from './AccessoryPicker.module.scss';
interface AccessoryPickerProps {
  hideAccessoryPicker: () => void;
}

interface AccessoryPickerState {
  selectedAccessories: Accessories[];
}

const AccessoryPicker: FC<AccessoryPickerProps> = ({ hideAccessoryPicker }) => {
  const { accessories, selectedAccessories } = useSelector(
    (state: State) => state.normalMode.global,
  );
  const [state, setState] = useState<AccessoryPickerState>({ selectedAccessories });
  const dispatch = useDispatch();

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
    dispatch(setAccessories(state.selectedAccessories));
    hideAccessoryPicker();
  };

  const removeAll = () => {
    setState((prevState) => ({ ...prevState, selectedAccessories: [] }));
    dispatch(removeAllAccessories());
    hideAccessoryPicker();
  };

  let message = 'Choisir';

  message +=
    state.selectedAccessories.length > 1
      ? ` ces ${state.selectedAccessories.length} accessoires`
      : ' cet accessoire';

  if (!state.selectedAccessories.length) message = "Ne pas choisir d'accessoire";

  return (
    <>
      <Backdrop onBackdropClick={hideAccessoryPicker} />
      <div className={styles.AccessoryPicker}>
        <form onSubmit={onFormSubmit}>
          <div className={styles.Cross} onClick={hideAccessoryPicker}>
            ✖
          </div>
          <>
            <fieldset>
              {accessories.map((accessory) => (
                <Accessory
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
        </form>
      </div>
    </>
  );
};

export default AccessoryPicker;
