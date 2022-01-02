import { useDispatch, useSelector } from 'react-redux';
import { Mode } from '../models';
import { changeMode } from '../store/actions';
import { State } from '../store/reducers';

export const useMode = () => {
  const dispatch = useDispatch();

  const { mode } = useSelector((state: State) => state.global);

  return {
    mode,
    changeMode: (mode: Mode) => dispatch(changeMode({ mode })),
  };
};
