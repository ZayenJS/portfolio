import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTechnologies } from '../store/actions';
import { State } from '../store/reducers';

export const useTechnologies = (all: boolean = false) => {
  const { technologies, error } = useSelector((state: State) => state.technologies);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!technologies.length && !error) {
      dispatch(getTechnologies({ all }));
    }
  }, [all, dispatch, error, technologies]);

  return { technologies, error };
};
