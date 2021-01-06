import React, { FC, FormEvent, useState } from 'react';
import Backdrop from '../../Backdrop/Backdrop';
import Accessory from './Accessory/Accessory';

import styles from './AccessoryPicker.module.scss';
interface AccessoryPickerProps {
  hideAccessoryPicker: () => void;
  setAccessories: (accessories: Accessories[]) => void;
  selectedAccessories: Accessories[];
}

export type Accessories =
  | 'beard-black'
  | 'big-chestnut-beard'
  | 'cigarette'
  | 'smoking-cigarette'
  | 'smoking-pipe'
  | 'monocle'
  | 'blond-hair'
  | 'hair-black'
  | 'hair-chestnut-woman-1'
  | 'hair-chestnut-woman-2'
  | 'hair-purple-woman'
  | 'viking-helmet'
  | 'cap-graduate'
  | 'melon-hat'
  | 'mustache-gentleman'
  | 'scar';

interface AccessoryPickerState {
  selectedAccessories: Accessories[];
  accessories: Accessories[];
}
const AccessoryPicker: FC<AccessoryPickerProps> = ({
  hideAccessoryPicker,
  setAccessories,
  selectedAccessories,
}) => {
  const [state, setState] = useState<AccessoryPickerState>({
    selectedAccessories,
    accessories: [
      'beard-black',
      'big-chestnut-beard',
      'cigarette',
      'smoking-cigarette',
      'smoking-pipe',
      'monocle',
      'blond-hair',
      'hair-black',
      'hair-chestnut-woman-1',
      'hair-chestnut-woman-2',
      'hair-purple-woman',
      'viking-helmet',
      'cap-graduate',
      'melon-hat',
      'mustache-gentleman',
      'scar',
    ],
  });

  const selectAccessory = (newAccessoryName: Accessories) => {
    const alreadyExist = state.selectedAccessories.find(
      (accessory) => accessory === newAccessoryName,
    );

    if (!alreadyExist) {
      return setState((prevState) => ({
        ...prevState,
        selectedAccessories: [...state.selectedAccessories, newAccessoryName],
      }));
    }

    setState((prevState) => ({
      ...prevState,
      selectedAccessories: prevState.selectedAccessories.filter(
        (accessory) => accessory !== newAccessoryName,
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
    setAccessories([]);
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
              {state.accessories.map((accessory) => (
                <Accessory
                  icon={true}
                  isSelected={state.selectedAccessories.includes(accessory)}
                  name={accessory}
                  selectAccessory={selectAccessory}
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
