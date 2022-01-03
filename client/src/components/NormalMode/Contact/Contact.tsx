import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import * as EmailValidator from 'email-validator';
import axios from 'axios';

import Field from './Field/Field';

import { baseTitle } from '../../../utils';

import classes from './Contact.module.scss';
import Message from '../../Message/Message';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { pageTransition } from '../../../constants/framer-motion';
import AnimatedText from '../../AnimatedText/AnimatedText';

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
    const isEmpty = event.target.value.length <= 0;
    const updatedState = {
      ...state,
      [name]: { ...state[name], value: event.target.value, hasError: isEmpty },
      hasError: false,
      isFormValid: true,
    };

    if (state.hasTriedToSubmit) {
      for (const key in state) {
        if (propsToIgnoreForFieldVerification.includes(key)) continue;

        const propToCheck = { ...updatedState[key as ContactStateProp] };

        if (propToCheck.hasError || !propToCheck.value) {
          updatedState.hasError = true;
          updatedState.isFormValid = false;
          updatedState.errorMessage = 'Tous les champs sont requis !';
        }
      }
    }

    setState(updatedState);
  };

  //  TODO: check form errors && implement backend for mail sending

  return (
    <>
      <Helmet>
        <title>{baseTitle} - Contact</title>
      </Helmet>
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageTransition}
        className={classes.Container}>
        <div className={classes.Content}>
          <div>
            <h1>Contact</h1>
            <p>
              Je suis intéréssé principalement par les missions en freelance en télétravail.
              Cependant, n'hésitez pas à me contacter en utilisant ce formulaire de contact si vous
              avez des questions, que mon profil vous interesse ou que vous voulez simplement entrer
              en contact avec moi (hello
              <AnimatedText text="👋🏻" animationName="wave" />
              ), je reste ouvert à toute proposition.
            </p>
          </div>
          <motion.form onSubmit={formSubmitHandler} className={classes.Contact}>
            <div className={classes.FormControl}>
              {(state.hasFormBeenSubmited && state.isFormValid) || state.hasError ? (
                <Message
                  className={state.hasError ? classes.ErrorMessage : classes.SuccessMessage}
                  errorMessage={state.errorMessage}
                  successMessage={state.successMessage}
                  hasError={state.hasError}
                />
              ) : null}
              <fieldset className={classes.Contact__Id}>
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
              </fieldset>
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
              <button disabled={state.hasError} tabIndex={0} type="submit">
                Envoyer
              </button>
            </div>
          </motion.form>
        </div>
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d169097.1589776075!2d2.110008553319217!3d48.530489093292395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e5cff896af791f%3A0x30b82c3688b2b30!2sEssonne!5e0!3m2!1sfr!2sfr!4v1640734873829!5m2!1sfr!2sfr"
          loading="lazy"></iframe>
      </motion.div>
    </>
  );
};

export default Contact;
