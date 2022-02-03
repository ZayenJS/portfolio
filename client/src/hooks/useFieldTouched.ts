import { useDispatch, useSelector } from 'react-redux';
import { Reducer } from '../models/Reducer';
import { fieldTouched } from '../store/actions';
import { State } from '../store/reducers';
import { FieldType } from '../store/reducers/contact.reducer';

export const useFieldTouched = (name: string, reducerName: keyof State) => {
  const dispatch = useDispatch();
  const reducer = useSelector((state: State) => state[reducerName]);

  return {
    // @ts-ignore
    touched: Reducer.matches(reducer, name) ? (reducer[name] as FieldType).touched : null,
    touchField: () => dispatch(fieldTouched({ name, reducerName })),
  };
};
