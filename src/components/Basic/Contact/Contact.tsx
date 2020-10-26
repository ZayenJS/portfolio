import React, { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';
import * as EmailValidator from 'email-validator';
import axios from 'axios';

import Field from './Field/Field';

import { baseTitle } from '../../../utils';

import styles from './Contact.module.scss';
import Message from '../../Message/Message';

interface ContactProps {}

type FieldsState = {
  [key in ContactStateProp]: {
    value: string;
    hasError: boolean;
  };
};

interface ContactState {
  hasError: boolean;
  hasFormBeenSubmited: boolean;
  message: string;
  isFormValid: boolean;
}

export type ContactStateProp = 'Nom' | 'Objet' | 'Message' | 'Email';

const Contact: FC<ContactProps> = () => {
  const [state, setState] = useState<ContactState & FieldsState>({
    Nom: { hasError: false, value: '' },
    Objet: { hasError: false, value: '' },
    Message: { hasError: false, value: '' },
    Email: { hasError: false, value: '' },
    hasError: false,
    hasFormBeenSubmited: false,
    message: 'Tous les champs sont requis !',
    isFormValid: false,
  });

  const formSubmitHandler = (event: FormEvent) => {
    event.preventDefault();

    if (!EmailValidator.validate(state.Email.value)) {
      return setState({
        ...state,
        Email: { ...state.Email, hasError: true },
        hasError: true,
        hasFormBeenSubmited: true,
        message: "Cet email n'est pas un email valide !",
      });
    }

    let updatedState = {
      ...state,
      hasError: false,
      hasFormBeenSubmited: true,
      message: 'Tous les champs sont requis !',
    };

    for (const key in state) {
      if (!state[key as ContactStateProp].value) {
        if (['hasError', 'isFormValid', 'hasFormBeenSubmited', 'message'].includes(key)) {
          continue;
        }

        updatedState.hasError = true;
        updatedState.isFormValid = false;

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
      setState((prevState) => ({
        ...prevState,
        hasFormBeenSubmited: true,
        message: 'Votre message a bien été envoyé !',
      }));
    } catch (e) {
      console.error(e);
    }
  };

  const onFieldChange = (
    name: ContactStateProp,
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    let hasError = false;
    let isFormValid = true;
    let message = state.message;

    for (const key in state) {
      if (['hasError', 'isFormValid', 'hasFormBeenSubmited', 'message'].includes(key)) continue;

      if (state[key as ContactStateProp].hasError || !state[key as ContactStateProp].value) {
        hasError = true;
        isFormValid = false;
        message = 'Tous les champs sont requis !';
      }
    }

    setState({
      ...state,
      [name]: { ...state[name], value: event.target.value, hasError: false },
      hasError,
      isFormValid,
      message,
      // hasFormBeenSubmited: false,
    });
  };

  useEffect(() => {
    document.title = `${baseTitle} - Contact`;
  }, []);

  return (
    <form onSubmit={formSubmitHandler} className={styles.Contact}>
      <div className={styles.FormControl}>
        {(state.hasFormBeenSubmited && state.isFormValid) || state.hasError ? (
          <Message content={state.message} />
        ) : null}
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
      </div>
    </form>
  );
};

export default Contact;
