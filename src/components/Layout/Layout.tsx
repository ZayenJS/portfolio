import React, { FC } from 'react';

import Footer from '../Footer/Footer';

import styles from './Layout.module.scss';

interface LayoutProps {
  isDevMode: boolean;
}

const Layout: FC<LayoutProps> = ({ children, isDevMode }) => {
  return (
    <>
      <main className={styles.Layout}>{children}</main>
      <Footer isDevMode={isDevMode} />
    </>
  );
};

export default Layout;
