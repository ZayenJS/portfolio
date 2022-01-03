import { useDispatch, useSelector } from 'react-redux';
import { Accessory } from '../models';
import { removeAllAccessories, setAccessories } from '../store/actions';
import { State } from '../store/reducers';

export const useAccessories = () => {
  const dispatch = useDispatch();
  const { accessories, selectedAccessories } = useSelector((state: State) => state.accessories);

  return {
    accessories,
    selectedAccessories,
    setAccessories: (accessories: Accessory[]) => dispatch(setAccessories({ accessories })),
    removeAllAccessories: () => dispatch(removeAllAccessories()),
  };
};
