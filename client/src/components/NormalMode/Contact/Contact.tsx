import React, { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';
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
import { useScrollToTop } from '../../../hooks/useScrollToTop';
import { InputName } from '../../../models/Contact';
import { useFieldValidation } from '../../../hooks/useFieldValidation';
import { useFieldTouched } from '../../../hooks/useFieldTouched';
import { useMail } from '../../../hooks/useMail';
import { MailStatus } from '../../../models/Mail';
import { FormErrorMessage } from '../../../constants/FormErrors';

interface ContactProps {}

interface ContactState {
  hasError: boolean;
  hasFormBeenSubmited: boolean;
  hasTriedToSubmit: boolean;
  message: string;
}

const Contact: FC<ContactProps> = () => {
  const [state, setState] = useState<ContactState>({
    hasError: false,
    hasFormBeenSubmited: false,
    hasTriedToSubmit: false,
    message: 'Le formulaire présente des erreurs, veuillez les corriger.',
  });

  useScrollToTop();
  const [fullname, setFullnameError] = useFieldValidation(InputName.FULL_NAME, 'contact');
  const [email, setEmailError] = useFieldValidation(InputName.EMAIL, 'contact');
  const [subject, setSubjectError] = useFieldValidation(InputName.SUBJECT, 'contact');
  const [message, setMessageError] = useFieldValidation(InputName.MESSAGE, 'contact');

  // check if all the inputs were touched
  const inputsTouched = fullname.touched && email.touched && subject.touched && message.touched;
  // check if all the inputs are valid
  const inputsValid = !fullname.error && !email.error && !subject.error && !message.error;
  // check if all input have a value
  const inputsHaveValue = !!fullname.value && !!email.value && !!subject.value && !!message.value;

  const { sendMail, notification, mailStatus } = useMail();

  const NOTIFICATION_TIME = 5000; /* ms */

  const formSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    if (!inputsValid || !inputsHaveValue) {
      setState((ps) => ({ ...ps, hasError: true, hasTriedToSubmit: true }));

      setFullnameError(FormErrorMessage.EMPTY_FIELD);
      setEmailError(FormErrorMessage.EMPTY_FIELD);
      setSubjectError(FormErrorMessage.EMPTY_FIELD);
      setMessageError(FormErrorMessage.EMPTY_FIELD);

      setTimeout(() => {
        setState((ps) => ({ ...ps, hasError: false }));
      }, NOTIFICATION_TIME);
      return;
    }

    sendMail();
    setState((ps) => ({
      ...ps,
      hasFormBeenSubmited: true,
    }));

    setTimeout(() => {
      setState((ps) => ({
        ...ps,
        hasFormBeenSubmited: false,
        hasTriedToSubmit: false,
      }));
    }, NOTIFICATION_TIME);
  };

  const resetFormErrorHandler = () => {
    if (state.hasError) {
      setState((ps) => ({ ...ps, hasError: false }));
    }
  };

  let isFormValid = true;

  if (state.hasTriedToSubmit) {
    isFormValid = inputsValid && inputsHaveValue && inputsTouched;
  }

  let feedbackMessage = state.message;

  if (state.hasFormBeenSubmited && mailStatus === MailStatus.SENT) {
    feedbackMessage = notification;
  }

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
          <motion.form
            onChange={resetFormErrorHandler}
            onSubmit={formSubmitHandler}
            className={classes.Contact}>
            <div className={classes.FormControl}>
              {(state.hasFormBeenSubmited && mailStatus !== MailStatus.NOT_SENT) ||
              state.hasError ? (
                <Message
                  className={state.hasError ? classes.ErrorMessage : classes.SuccessMessage}
                  message={feedbackMessage}
                  hasError={state.hasError}
                />
              ) : null}
              <fieldset className={`${classes.Contact__Id} ${classes.Field}`}>
                <Field
                  label="Nom complet"
                  name={InputName.FULL_NAME}
                  reducerName="contact"
                  type="text"
                  errorMessage={fullname.error}
                />
                <Field
                  label="Email"
                  name={InputName.EMAIL}
                  reducerName="contact"
                  type="email"
                  errorMessage={email.error}
                />
              </fieldset>
              <Field
                className={classes.Field}
                label="Objet"
                name={InputName.SUBJECT}
                reducerName="contact"
                type="text"
                errorMessage={subject.error}
              />
              <Field
                className={classes.Field}
                label="Message"
                name={InputName.MESSAGE}
                reducerName="contact"
                type="textarea"
                errorMessage={message.error}
              />
              <button disabled={!isFormValid} tabIndex={0} type="submit">
                Envoyer
              </button>
            </div>
          </motion.form>
        </div>
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d169097.1589776075!2d2.110008553319217!3d48.530489093292395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e5cff896af791f%3A0x30b82c3688b2b30!2sEssonne!5e0!3m2!1sfr!2sfr!4v1640734873829!5m2!1sfr!2sfr"
          loading="lazy"
        />
      </motion.div>
    </>
  );
};

export default Contact;
