import { FC, FormEvent, useState } from 'react';
import Layout from '../../../components/Layout/Layout';
import Field from '../../../components/NormalMode/Contact/Field/Field';
import { InputName } from '../../../models/Contact';

import classes from './Login.module.scss';

export interface LoginProps {}

const Login: FC<LoginProps> = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginFormSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
  };

  //  TODO: check errors on form && implement backend to login as admin

  return (
    <Layout>
      <form className={classes.Container} onSubmit={loginFormSubmitHandler}>
        <Field errorMessage="" name={InputName.EMAIL} type="text" label="Email" />
        <Field errorMessage="" name={InputName.PASSWORD} type="password" label="Mot de passe" />
        <button>Se connecter</button>
      </form>
    </Layout>
  );
};

export default Login;
