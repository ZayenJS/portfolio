import React, { ChangeEvent, FC } from 'react';

import { ContactStateProp } from '../Contact';

import styles from './Field.module.scss';

interface FieldProps {
  name: ContactStateProp;
  hasError: boolean;
  type: string;
  value: string;
  withLabel?: boolean;
  setValue: (
    name: ContactStateProp,
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}

const Field: FC<FieldProps> = ({ name, hasError, type, withLabel = true, value, setValue }) => {
  const label = (
    <label className={!value.length ? styles.EmptyInput : styles.FilledInput} htmlFor={name}>
      {name}
    </label>
  );

  let field;

  switch (type) {
    case 'textarea':
      field = (
        <>
          <textarea
            value={value}
            onChange={(event) => setValue(name, event)}
            name={name}
            id={name}></textarea>
          {withLabel ? label : null}
        </>
      );
      break;
    case 'email':
      field = (
        <>
          <input
            value={value}
            onChange={(event) => setValue(name, event)}
            type="email"
            name={name}
            id={name}
          />
          {withLabel ? label : null}
        </>
      );
      break;
    case 'phone':
      field = (
        <>
          <input
            value={value}
            onChange={(event) => setValue(name, event)}
            type="phone"
            name={name}
            id={name}
          />
          {withLabel ? label : null}
        </>
      );
      break;
    default:
      field = (
        <>
          <input
            value={value}
            onChange={(event) => setValue(name, event)}
            type="text"
            name={name}
            id={name}
          />
          {withLabel ? label : null}
        </>
      );
  }

  return <div className={[styles.Field, hasError ? styles.Error : ''].join(' ')}>{field}</div>;
};

export default Field;
