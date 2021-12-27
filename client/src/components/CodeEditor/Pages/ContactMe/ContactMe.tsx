import React, { FC, useState } from 'react';
import { ContactMeField, IContactMeFields } from '../../../../models';
import styles from './ContactMe.module.scss';
import Field from './Field/Field';

interface ContactMeProps {}

const ContactMe: FC<ContactMeProps> = () => {
  const [state, setState] = useState<IContactMeFields>({
    name: { value: '', hasError: false },
    email: { value: '', hasError: false },
    message: { value: '', hasError: false },
  });

  const onChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    name: ContactMeField,
  ) => {
    setState({ ...state, [name]: { ...state[name], value: event.target.value, hasError: false } });
  };

  const formSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    for (const key in state) {
      const prop = key as ContactMeField;

      if (!state[prop].value) {
        setState({
          ...state,
          [prop]: {
            ...state[prop],
            hasError: true,
          },
        });
        return alert(`ReferenceError : ${key} is not defined`);
      }
    }

    console.log('Message sent !');
  };

  return (
    <section className={styles.ContactMe} style={{ lineHeight: '22px' }}>
      <div>
        <span className="await">import</span>
        <span className="variable"> axios </span>
        <span className="await">from </span>
        <span className="string-color">'axios'</span>;
      </div>
      <br />
      <div>
        <p className="comments">
          &#47;* Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quaerat
          doloremque nisi non numquam, laborum neque dicta provident architecto mollitia
          necessitatibus? Pariatur laborum porro in nostrum deleniti quo magni mollitia.
        </p>
        <p className="comments">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nesciunt optio
          pariatur aspernatur magni quam cum deserunt dolores cupiditate saepe architecto harum
          esse, illum explicabo amet ducimus error, sequi doloremque. *&#47;
        </p>
      </div>
      <br />
      <form onSubmit={formSubmitHandler}>
        <Field
          type="text"
          keyword="const"
          dataType="string"
          fieldName="name"
          hasError={state.name.hasError}
          value={state.name.value}
          autoFocus={true}
          setValue={onChangeHandler}
        />
        <Field
          type="text"
          keyword="const"
          dataType="string"
          fieldName="email"
          hasError={state.email.hasError}
          value={state.email.value}
          setValue={onChangeHandler}
        />
        <Field
          type="textarea"
          keyword="const"
          dataType="string"
          fieldName="message"
          hasError={state.message.hasError}
          value={state.message.value}
          setValue={onChangeHandler}
        />
        <br />
        <div>
          <span className="keyword">const</span>
          <span className="function"> sendMessage</span> = <span className="keyword">async</span> (
          <span className="variable">message</span>: <span className="data-type">string</span>)
          =&gt; {'{'}
          <div>
            <span className="await indent">await</span>
            <span className="variable"> axios</span>.<span className="span function">post</span>(
            <span className="string-color">'https://example.com/'</span>, {'{'}
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
          <span className="comments">&#47;&#47; Click here to send</span>
        </button>
      </form>
    </section>
  );
};

export default ContactMe;
