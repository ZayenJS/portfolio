import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProjects } from '../store/actions';
import { State } from '../store/reducers';

export const useProjects = () => {
  const { projects, error } = useSelector((state: State) => state.projects);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!projects.length) {
      dispatch(getProjects());
    }
  }, [dispatch, projects]);

  return { projects, error };
};
