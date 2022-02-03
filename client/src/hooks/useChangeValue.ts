import { useDispatch, useSelector } from 'react-redux';
import { InputName } from '../models/Contact';
import { Reducer } from '../models/Reducer';
import { changeValue } from '../store/actions';
import { State } from '../store/reducers';

export const useChangeValue = (name: InputName, reducerName: keyof State) => {
  const dispatch = useDispatch();
  const state = useSelector((state: State) => state);

  if (reducerName) {
    const reducer = state[reducerName];

    if (Reducer.matches(reducer, name)) {
      return {
        /**
         *
         * TS doesn't know name will be the in the right reducer
         * the above if statement is to make sure it's the right reducer
         * so it's ok to use it here as a string ¯\_(ツ)_/¯
         *
         */
        // @ts-ignore
        value: reducer[name].value,
        changeValue: (reducerName: keyof State, value: string) =>
          dispatch(changeValue({ name, reducerName, value })),
      };
    }

    throw new TypeError(
      `useChangeValue: reducerName "${reducerName}" doesn't have a "${name}" field`,
    );
  }

  return {
    value: null,
    changeValue: (reducerName: keyof State, value: string) =>
      dispatch(changeValue({ name, reducerName, value })),
  };
};
