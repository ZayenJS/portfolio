import React, { FC } from 'react';

import ParticleBackground from '../NormalMode/ParticleBackground/ParticleBackground';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

import styles from './Layout.module.scss';
import particlesStyle from '../../constants/particlesStyle';
import { useSelector } from 'react-redux';
import { State } from '../../store/reducers';

interface LayoutProps {
  isDevMode: boolean;
  isNormalMode: boolean;
  setIsDevMode?: () => void;
}

const Layout: FC<LayoutProps> = ({ children, isDevMode, setIsDevMode, isNormalMode }) => {
  let layout = null;

  const { isHeaderHovered } = useSelector((state: State) => state.global);

  if (isNormalMode) {
    layout = (
      <>
        <div
          className={[styles.Layout__Normal, isHeaderHovered ? styles.HeaderHovered : ''].join(
            ' ',
          )}>
          <Header isNormalMode={true} />
          <ParticleBackground style={particlesStyle} />
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
