import React, { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';
import axios from 'axios';

import Field from './Field/Field';

import { baseTitle } from '../../../utils';

import styles from './Contact.module.scss';

interface ContactProps {}

type ContactState = {
  [key in ContactStateProp]: { value: string; hasError: boolean };
};

export type ContactStateProp = 'Nom' | 'Objet' | 'Message' | 'Email';

const Contact: FC<ContactProps> = () => {
  const [state, setState] = useState<ContactState>({
    Nom: { hasError: false, value: '' },
    Objet: { hasError: false, value: '' },
    Message: { hasError: false, value: '' },
    Email: { hasError: false, value: '' },
  });

  const formSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    let updatedState = { ...state };
    let hasError;

    for (const key in state) {
      if (!state[key as ContactStateProp].value) {
        hasError = true;
        updatedState[key as ContactStateProp] = {
          ...state[key as ContactStateProp],
          hasError: true,
        };
      } else {
        updatedState[key as ContactStateProp] = {
          ...state[key as ContactStateProp],
          hasError: false,
        };
      }
    }
    if (hasError) {
      return setState(updatedState);
    }

    const form = event.target as HTMLFormElement;
    const data = new FormData(form);

    sendData(data);
  };

  const sendData = async (data: FormData) => {
    const response = await axios.post('https://formspree.io/f/meqpgdyo', data, {});

    console.log(response);
  };

  const onFieldChange = (
    name: ContactStateProp,
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setState({ ...state, [name]: { ...state[name], value: event.target.value, hasError: false } });
  };

  useEffect(() => {
    document.title = `${baseTitle} - Contact`;
  }, []);

  return (
    <form onSubmit={formSubmitHandler} className={styles.Contact}>
      <Field
        name="Nom"
        type="text"
        hasError={state.Nom.hasError}
        value={state.Nom.value}
        setValue={onFieldChange}
      />
      <Field
        name="Email"
        type="text"
        hasError={state.Email.hasError}
        value={state.Email.value}
        setValue={onFieldChange}
      />
      <Field
        name="Objet"
        type="text"
        hasError={state.Objet.hasError}
        value={state.Objet.value}
        setValue={onFieldChange}
      />
      <Field
        name="Message"
        type="textarea"
        hasError={state.Message.hasError}
        value={state.Message.value}
        setValue={onFieldChange}
      />
      <button tabIndex={1} type="submit">
        Envoyer
      </button>
    </form>
  );
};

export default Contact;
