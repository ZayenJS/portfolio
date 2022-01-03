import { FC, FormEvent, useState } from 'react';
import Layout from '../../../components/Layout/Layout';
import Field from '../../../components/NormalMode/Contact/Field/Field';

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
        <Field
          hasError={false}
          name="Email"
          type="text"
          value={email}
          setValue={setEmail}
          withLabel
        />
        <Field
          hasError={false}
          name="Nom"
          type="password"
          value={password}
          setValue={setPassword}
          withLabel
        />
        <button>Se connecter</button>
      </form>
    </Layout>
  );
};

export default Login;
