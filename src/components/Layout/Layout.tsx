import React, { FC } from 'react';

import Footer from '../Footer/Footer';

import styles from './Layout.module.scss';

interface LayoutProps {}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <main className={styles.Layout}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
