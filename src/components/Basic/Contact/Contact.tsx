import React, { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';
import axios from 'axios';

import Field from './Field/Field';

import { baseTitle } from '../../../utils';

import styles from './Contact.module.scss';

interface ContactProps {}

const Contact: FC<ContactProps> = () => {
  const [state, setstate] = useState({
    Nom: '',
    Objet: '',
    Message: '',
    Email: '',
  });

  const formSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const data = new FormData(form);

    sendData(data);
  };

  const sendData = async (data: FormData) => {
    const response = await axios.post('https://formspree.io/f/meqpgdyo', data, {});

    console.log(response);
  };

  const onFieldChange = (
    name: string,
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setstate({ ...state, [name]: event.target.value });
  };

  useEffect(() => {
    document.title = `${baseTitle} - Contact`;
  }, []);

  return (
    <form onSubmit={formSubmitHandler} className={styles.Contact}>
      <Field name="Nom" type="text" value={state.Nom} setValue={onFieldChange} />
      <Field name="Email" type="text" value={state.Email} setValue={onFieldChange} />
      <Field name="Objet" type="text" value={state.Objet} setValue={onFieldChange} />
      <Field name="Message" type="textarea" value={state.Message} setValue={onFieldChange} />
      <button type="submit">Envoyer</button>
    </form>
  );
};

export default Contact;
