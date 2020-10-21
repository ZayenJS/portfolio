import React, { FC, useEffect } from 'react';
import { baseTitle } from '../../../utils';

import styles from './Contact.module.scss';

interface ContactProps {}

const Contact: FC<ContactProps> = () => {
  useEffect(() => {
    document.title = `${baseTitle} - Contact`;
  }, []);

  return <div className={styles.Contact}>Contact Component</div>;
};

export default Contact;
