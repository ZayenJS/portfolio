import React, { FC } from 'react';

import ParticleBackground from '../Basic/ParticleBackground/ParticleBackground';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

import styles from './Layout.module.scss';

interface LayoutProps {
  isDevMode: boolean;
  isBasic: boolean;
  setIsDevMode?: () => void;
}

const Layout: FC<LayoutProps> = ({ children, isDevMode, setIsDevMode, isBasic }) => {
  let layout = null;
  if (isBasic) {
    layout = (
      <>
        <div className={styles.Layout__Basic}>
          <ParticleBackground style={{ gridArea: 'header' }} />
          <Header isBasic={true} />
          <main className={styles.Layout__Basic__Main}>{children}</main>
          <Footer setIsDevMode={setIsDevMode} isDevMode={false} isBasic={true} />
        </div>
      </>
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
