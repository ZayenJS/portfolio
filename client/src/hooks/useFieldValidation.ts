import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FormErrorMessage } from '../constants/FormErrors';
import { InputName } from '../models/Contact';
import { Reducer } from '../models/Reducer';
import { setFieldError } from '../store/actions';
import { State } from '../store/reducers';
import { FieldType } from '../store/reducers/contact.reducer';

export const useFieldValidation = (
  name: InputName,
  reducerName: keyof State,
): [FieldType, (errorMessage: string | FormErrorMessage) => void] => {
  const reducer = useSelector((state: State) => state[reducerName]);
  const dispatch = useDispatch();
  // @ts-ignore
  const field = reducer[name] as FieldType;

  useEffect(() => {
    if (Reducer.matches(reducer, name)) {
      // @ts-ignore
      const field = reducer[name] as FieldType;

      if (!field.value && field.touched && field.error !== FormErrorMessage.EMPTY_FIELD) {
        dispatch(setFieldError({ name, reducerName, errorMessage: FormErrorMessage.EMPTY_FIELD }));

        return;
      }

      if (field.value && field.touched && field.error === FormErrorMessage.EMPTY_FIELD) {
        dispatch(setFieldError({ name, reducerName, errorMessage: '' }));
        return;
      }

      if (field.touched && field.error !== FormErrorMessage.EMPTY_FIELD) {
        switch (name) {
          case InputName.FULL_NAME: {
            if (
              field.error === FormErrorMessage.INVALID_NAME &&
              !field.value.match(/[\d+-.@)(/\\"^$*|[\]_&<>:;!§µ]+/gi)
            ) {
              dispatch(setFieldError({ name, reducerName, errorMessage: '' }));
            } else if (
              field.error !== FormErrorMessage.INVALID_NAME &&
              field.value.match(/[\d+-.@)(/\\"^$*|[\]_&<>:;!§µ]+/gi)
            ) {
              dispatch(
                setFieldError({ name, reducerName, errorMessage: FormErrorMessage.INVALID_NAME }),
              );
            }

            break;
          }

          case InputName.EMAIL: {
            if (
              field.error === FormErrorMessage.INVALID_EMAIL &&
              field.value.match(/[\w.-]+@\w+\.\w{2,}/g)
            ) {
              dispatch(setFieldError({ name, reducerName, errorMessage: '' }));
            } else if (
              field.error !== FormErrorMessage.INVALID_EMAIL &&
              !field.value.match(/[\w.-]+@\w+\.\w{2,}/g)
            ) {
              dispatch(
                setFieldError({ name, reducerName, errorMessage: FormErrorMessage.INVALID_EMAIL }),
              );
            }

            break;
          }

          default:
            break;
        }
      }
    }
  }, [dispatch, name, reducer, reducerName]);

  return [
    field,
    (errorMessage: string | FormErrorMessage) =>
      dispatch(setFieldError({ name, reducerName, errorMessage })),
  ];
};
