import { useDispatch, useSelector } from 'react-redux';

import { State } from '../store/reducers';
import { hoverHeader } from '../store/actions/global';

export const useHeader = () => {
  const { isHeaderHovered } = useSelector((state: State) => state.global);

  const dispatch = useDispatch();

  return {
    isHeaderHovered,
    hoverHeader: (isHovered: boolean) => dispatch(hoverHeader({ isHovered })),
  };
};
