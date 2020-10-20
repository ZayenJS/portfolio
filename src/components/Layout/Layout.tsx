import React, { FC } from 'react';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';

import styles from './Layout.module.scss';

interface LayoutProps {
  isDevMode: boolean;
  isBasic: boolean;
}

const Layout: FC<LayoutProps> = ({ children, isDevMode, isBasic }) => {
  let layout = null;
  if (isBasic) {
    layout = (
      <div className={styles.Layout__Basic}>
        <Header isBasic={true} />
        <main className={styles.Layout__Basic__Main}>{children}</main>
        <Footer isDevMode={false} isBasic={true} />
      </div>
    );
  } else if (isDevMode || (!isDevMode && !isBasic)) {
    layout = (
      <>
        <main className={styles.Layout__Dev__Main}>{children}</main>
        <Footer isDevMode={isDevMode} isBasic={isBasic} />
      </>
    );
  }

  return layout;
};

export default Layout;
