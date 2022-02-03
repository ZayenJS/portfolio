// import { ChangeEvent, FC } from 'react';

// import { ContactStateProp } from '../Contact';

// import classes from './Field.module.scss';

// interface FieldProps {
//   name: ContactStateProp;
//   hasError: boolean;
//   type: string;
//   value: string;
//   withLabel?: boolean;
//   setValue: (
//     name: ContactStateProp,
//     event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//   ) => void;
// }

// const Field: FC<FieldProps> = ({ name, hasError, type, withLabel = true, value, setValue }) => {
//   const label = (
//     <label className={!value.length ? classes.EmptyInput : classes.FilledInput} htmlFor={name}>
//       {name}
//     </label>
//   );

//   let field;

//   switch (type) {
//     case 'textarea':
//       field = (
//         <>
//           <textarea
//             value={value}
//             onChange={(event) => setValue(name, event)}
//             name={name}
//             id={name}
//           />
//           {withLabel ? label : null}
//         </>
//       );
//       break;
//     case 'email':
//       field = (
//         <>
//           <input
//             value={value}
//             onChange={(event) => setValue(name, event)}
//             type="email"
//             name={name}
//             id={name}
//           />
//           {withLabel ? label : null}
//         </>
//       );
//       break;
//     case 'phone':
//       field = (
//         <>
//           <input
//             value={value}
//             onChange={(event) => setValue(name, event)}
//             type="phone"
//             name={name}
//             id={name}
//           />
//           {withLabel ? label : null}
//         </>
//       );
//       break;
//     default:
//       field = (
//         <>
//           <input
//             value={value}
//             onChange={(event) => setValue(name, event)}
//             type="text"
//             name={name}
//             id={name}
//           />
//           {withLabel ? label : null}
//         </>
//       );
//   }

//   return <div className={[classes.Field, hasError ? classes.Error : ''].join(' ')}>{field}</div>;
// };

// export default Field;

import { ChangeEvent, FC, FocusEvent } from 'react';
import { useChangeValue } from '../../../../hooks/useChangeValue';
import { useFieldTouched } from '../../../../hooks/useFieldTouched';
import { InputName } from '../../../../models/Contact';
import { State } from '../../../../store/reducers';

import classes from './Field.module.scss';

export interface FieldProps {
  id?: string;
  className?: string;
  label?: string;
  onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;
  maxLength?: number;
  placeholder?: string;
  reducerName?: keyof State;
  name: InputName;
  value?: string;
  autofocus?: boolean;
  errorMessage?: string;
  type?: 'text' | 'password' | 'email' | 'number' | 'url' | 'textarea';
  min?: string;
  max?: string;
  onChange?: (event: ChangeEvent) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const Field: FC<FieldProps> = ({
  id,
  label,
  className = '',
  type = 'text',
  onKeyUp,
  name,
  value,
  reducerName = 'global',
  onChange,
  onBlur,
  placeholder,
  maxLength,
  errorMessage = '',
  min,
  max,
}) => {
  const { changeValue, value: fieldValue } = useChangeValue(name, reducerName);
  value = fieldValue ?? value;

  const { touchField } = useFieldTouched(name, reducerName);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (onChange) return onChange(event);

    if (reducerName) return changeValue(reducerName, event.target.value);
  };

  const onBlurHandler = (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (onBlur) return onBlur(event);

    touchField();
  };

  let input;
  switch (type) {
    case 'textarea':
      input = (
        <>
          <textarea
            name={name}
            maxLength={maxLength}
            id={id}
            placeholder={placeholder}
            value={value}
            onBlur={onBlurHandler}
            className={errorMessage ? classes.Error : ''}
            onChange={onChangeHandler}></textarea>
          <label className={!value ? classes.EmptyInput : classes.FilledInput} htmlFor={id}>
            {label}
          </label>
        </>
      );
      break;
    case 'number':
      input = (
        <>
          <input
            name={name}
            type={type}
            id={id}
            placeholder={placeholder}
            onKeyUp={onKeyUp}
            value={value}
            onChange={onChangeHandler}
            min={min}
            max={max}
            onBlur={onBlurHandler}
            className={errorMessage ? classes.Error : ''}
          />
          <label className={!value ? classes.EmptyInput : classes.FilledInput} htmlFor={id}>
            {label}
          </label>
        </>
      );
      break;
    default:
      input = (
        <>
          <input
            autoComplete="off"
            name={name}
            type={type}
            id={id}
            placeholder={placeholder}
            onKeyUp={onKeyUp}
            value={value}
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
            className={errorMessage ? classes.Error : ''}
          />
          <label className={!value ? classes.EmptyInput : classes.FilledInput} htmlFor={id}>
            {label}
          </label>
        </>
      );
  }

  return (
    <div className={`${classes.Container} ${className ?? ''} ${errorMessage ? classes.Error : ''}`}>
      <div>{input}</div>
      <span className={classes.Error}>{errorMessage.length > 0 ? errorMessage : ''}</span>
    </div>
  );
};

export default Field;
