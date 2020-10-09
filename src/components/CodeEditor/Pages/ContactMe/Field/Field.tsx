import React, { FC, useState } from 'react';
import { ContactMeField } from '../../../../../models';
import styles from './Field.module.scss';

interface FieldProps {
  keyword: string;
  type: string;
  fieldName: ContactMeField;
  dataType: string;
  value: string;
  setValue: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    name: ContactMeField,
  ) => void;
}

const Field: FC<FieldProps> = ({ keyword, type, fieldName, dataType, value, setValue }) => {
  const [state, setState] = useState({
    inputWidth: 7,
  });

  const onKeyDownHandler = (event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const widthToAdd = (+value.length + 1) * 8;

    if (event.key === 'Backspace' || event.key === 'Delete') {
      return setState({ ...state, inputWidth: state.inputWidth - 8 });
    }

    setState({ ...state, inputWidth: 7 + widthToAdd });
  };

  const onKeyUpHandler = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const element = event.target as HTMLTextAreaElement;
    element.style.height = '1px';
    element.style.height = element.scrollHeight + 'px';
  };

  let inputElem;

  switch (type) {
    case 'textarea':
      inputElem = (
        <div style={{ display: 'inline' }} className="string-color">
          `
          <div>
            <textarea
              id={fieldName + '-input'}
              value={value}
              spellCheck={false}
              autoComplete="true"
              className={[styles.Field__Textarea, 'string-color indent'].join(' ')}
              onChange={(event) => setValue(event, fieldName)}
              onKeyDown={onKeyDownHandler}
              onKeyUp={onKeyUpHandler}
            />
          </div>
          `<span style={{ color: '#fff' }}>;</span>
        </div>
      );
      break;
    case 'text':
      inputElem = (
        <span className="string-color">
          '
          <input
            id={fieldName + '-input'}
            type="text"
            value={value}
            spellCheck={false}
            autoComplete="true"
            className="string-color"
            style={{ width: `${state.inputWidth}px` }}
            onChange={(event) => setValue(event, fieldName)}
            onKeyDown={onKeyDownHandler}
          />
          ';
        </span>
      );
      break;
    default:
      inputElem = null;
  }

  return (
    <div className={styles.Field}>
      <label htmlFor={fieldName + '-input'}>
        <span className="keyword">{keyword}</span>
        <span className="variable"> {fieldName}</span>:{' '}
        <span className="data-type">{dataType}</span> =
      </label>{' '}
      {inputElem}
    </div>
  );
};

export default Field;
