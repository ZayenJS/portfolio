import React, { FC, useState } from 'react';
import { ContactMeField } from '../../../../models';
import styles from './ContactMe.module.scss';
import Field from './Field/Field';

interface ContactMeProps {}

const ContactMe: FC<ContactMeProps> = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const onChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    name: ContactMeField,
  ) => {
    setState({ ...state, [name]: event.target.value });
  };

  const formSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    console.log('Message sent !');
  };

  return (
    <section className={styles.ContactMe} style={{ lineHeight: '22px' }}>
      <div>
        <p className="comments">
          /* Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quaerat doloremque
          nisi non numquam, laborum neque dicta provident architecto mollitia necessitatibus?
          Pariatur laborum porro in nostrum deleniti quo magni mollitia.
        </p>
        <p className="comments">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nesciunt optio
          pariatur aspernatur magni quam cum deserunt dolores cupiditate saepe architecto harum
          esse, illum explicabo amet ducimus error, sequi doloremque. */
        </p>
      </div>

      <form onSubmit={formSubmitHandler} style={{ color: '#fff' }}>
        <Field
          type="text"
          keyword="const"
          dataType="string"
          fieldName="name"
          value={state.name}
          setValue={onChangeHandler}
        />
        <Field
          type="text"
          keyword="const"
          dataType="string"
          fieldName="email"
          value={state.email}
          setValue={onChangeHandler}
        />
        <Field
          type="textarea"
          keyword="const"
          dataType="string"
          fieldName="message"
          value={state.message}
          setValue={onChangeHandler}
        />
        <br />
        <div>
          <span className="keyword">const</span>
          <span className="function"> sendMessage</span> = <span className="keyword">async</span> (
          <span className="variable">message</span>: <span className="data-type">string</span>)
          =&gt; {'{'}
          <div>
            <span className="await indent">await</span> axios.post(websiteUrl , {'{'}
            <div className="indent">
              <div className="indent">
                <span className="attribute">name</span>,
              </div>
              <div className="indent">
                <span className="attribute">email</span>,
              </div>
              <div className="indent">
                <span className="attribute">message</span>,
              </div>
            </div>
            <span className="indent">{'}'});</span>
          </div>
          <div>{'}'}</div>
        </div>
        <br />
        <button type="submit">
          <span className="function">sendMessage</span>();
          <span className="comments">// Click here to send</span>
        </button>
      </form>
    </section>
  );
};

export default ContactMe;
