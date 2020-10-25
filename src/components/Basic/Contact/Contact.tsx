import React, { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';
import * as EmailValidator from 'email-validator';
import axios from 'axios';

import Field from './Field/Field';

import { baseTitle } from '../../../utils';

import styles from './Contact.module.scss';

interface ContactProps {}

type ContactState = {
  [key in ContactStateProp]: {
    value: string;
    hasError: boolean;
  };
};

export type ContactStateProp = 'Nom' | 'Objet' | 'Message' | 'Email';

const Contact: FC<ContactProps> = () => {
  const [state, setState] = useState<ContactState & { hasError: boolean }>({
    Nom: { hasError: false, value: '' },
    Objet: { hasError: false, value: '' },
    Message: { hasError: false, value: '' },
    Email: { hasError: false, value: '' },
    hasError: false,
  });

  const formSubmitHandler = (event: FormEvent) => {
    event.preventDefault();

    if (!EmailValidator.validate(state.Email.value)) {
      return setState({ ...state, Email: { ...state.Email, hasError: true }, hasError: true });
    }

    let updatedState = { ...state, hasError: false };

    for (const key in state) {
      if (!state[key as ContactStateProp].value) {
        if (key === 'hasError') continue;

        updatedState.hasError = true;

        updatedState[key as ContactStateProp] = {
          ...state[key as ContactStateProp],
          hasError: true,
        };
      } else {
        updatedState[key as ContactStateProp] = {
          ...state[key as ContactStateProp],
        };
      }
    }

    if (updatedState.hasError) {
      return setState(updatedState);
    }

    const form = event.target as HTMLFormElement;
    const data = new FormData(form);

    sendData(data);
  };

  const sendData = async (data: FormData) => {
    try {
      const response = await axios.post('https://formspree.io/f/meqpgdyo', data, {});

      console.log(response);
    } catch (e) {
      console.error(e);
    }
  };

  const onFieldChange = (
    name: ContactStateProp,
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    let hasError = false;

    for (const key in state) {
      if (state[key as ContactStateProp].hasError) {
        if (key === 'hasError') continue;

        hasError = true;
      }
    }

    setState({
      ...state,
      [name]: { ...state[name], value: event.target.value, hasError: false },
      hasError,
    });
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
        type="email"
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
      <button disabled={state.hasError} tabIndex={1} type="submit">
        Envoyer
      </button>
    </form>
  );
};

export default Contact;
