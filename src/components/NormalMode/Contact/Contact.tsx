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
  hasTriedToSubmit: boolean;
  successMessage: string;
  errorMessage: string;
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
    hasTriedToSubmit: false,
    errorMessage: 'Tous les champs sont requis !',
    successMessage: 'Votre message a bien été envoyé !',
    isFormValid: false,
  });

  const propsToIgnoreForFieldVerification = [
    'hasError',
    'isFormValid',
    'hasFormBeenSubmited',
    'hasTriedToSubmit',
    'errorMessage',
    'successMessage',
  ];

  const formSubmitHandler = (event: FormEvent) => {
    event.preventDefault();

    if (!EmailValidator.validate(state.Email.value)) {
      return setState({
        ...state,
        Email: { ...state.Email, hasError: true },
        hasError: true,
        hasTriedToSubmit: true,
        errorMessage: "Cet email n'est pas un email valide !",
      });
    }

    let updatedState = {
      ...state,
      hasError: false,
      hasTriedToSubmit: true,
      errorMessage: 'Tous les champs sont requis !',
    };

    for (const key in state) {
      if (!state[key as ContactStateProp].value) {
        if (propsToIgnoreForFieldVerification.includes(key)) continue;

        updatedState.hasError = true;
        updatedState.isFormValid = false;

        updatedState[key as ContactStateProp] = {
          ...state[key as ContactStateProp],
          hasError: true,
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
      const response = await axios.post('https://formspree.io/f/meqpgdyo', data);

      console.log(response);
      setState((prevState) => ({
        ...prevState,
        hasFormBeenSubmited: true,
        successMessage: 'Votre message a bien été envoyé !',
      }));

      setTimeout(() => {
        setState((prevState) => ({ ...prevState, hasFormBeenSubmited: false }));
      }, 5000);
    } catch (e) {
      console.error(e);
    }
  };

  const onFieldChange = (
    name: ContactStateProp,
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const isEmpty = true && event.target.value.length <= 0;
    const updatedState = {
      ...state,
      [name]: { ...state[name], value: event.target.value, hasError: isEmpty },
      hasError: false,
      isFormValid: true,
    };

    if (state.hasTriedToSubmit) {
      for (const key in state) {
        if (propsToIgnoreForFieldVerification.includes(key)) continue;

        let propToCheck = { ...updatedState[key as ContactStateProp] };

        if (propToCheck.hasError || !propToCheck.value) {
          updatedState.hasError = true;
          updatedState.isFormValid = false;
          updatedState.errorMessage = 'Tous les champs sont requis !';
        }
      }
    }

    setState(updatedState);
  };

  useEffect(() => {
    document.title = `${baseTitle} - Contact`;
  }, []);

  return (
    <form onSubmit={formSubmitHandler} className={styles.Contact}>
      <div className={styles.FormControl}>
        {(state.hasFormBeenSubmited && state.isFormValid) || state.hasError ? (
          <Message
            className={state.hasError ? styles.ErrorMessage : styles.SuccessMessage}
            errorMessage={state.errorMessage}
            successMessage={state.successMessage}
            hasError={state.hasError}
          />
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
