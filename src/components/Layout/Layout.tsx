import React, { FC } from 'react';

import ParticleBackground from '../NormalMode/ParticleBackground/ParticleBackground';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

import styles from './Layout.module.scss';

interface LayoutProps {
  isDevMode: boolean;
  isNormalMode: boolean;
  setIsDevMode?: () => void;
}

const Layout: FC<LayoutProps> = ({ children, isDevMode, setIsDevMode, isNormalMode }) => {
  let layout = null;
  if (isNormalMode) {
    layout = (
      <>
        <div className={styles.Layout__Normal}>
          <ParticleBackground style={{ gridArea: 'header' }} />
          <Header isNormalMode={true} />
          <main className={styles.Layout__Normal__Main}>{children}</main>
          <Footer setIsDevMode={setIsDevMode} isDevMode={false} isNormalMode={true} />
        </div>
      </>
    );
  } else if (isDevMode || (!isDevMode && !isNormalMode)) {
    layout = (
      <>
        <main className={styles.Layout__Dev__Main}>{children}</main>
        <Footer isDevMode={isDevMode} isNormalMode={isNormalMode} />
      </>
    );
  }

  return layout;
};

export default Layout;
