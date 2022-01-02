import { useDispatch, useSelector } from 'react-redux';
import { Accessories } from '../models';
import { removeAllAccessories, setAccessories } from '../store/actions';
import { State } from '../store/reducers';

export const useAccessories = () => {
  const dispatch = useDispatch();
  const { accessories, selectedAccessories } = useSelector((state: State) => state.accessories);

  return {
    accessories,
    selectedAccessories,
    setAccessories: (accessories: Accessories[]) => dispatch(setAccessories({ accessories })),
    removeAllAccessories: () => dispatch(removeAllAccessories()),
  };
};
