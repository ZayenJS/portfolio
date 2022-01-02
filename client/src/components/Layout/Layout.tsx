import { FC } from 'react';

import ParticleBackground from '../NormalMode/ParticleBackground/ParticleBackground';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

import styles from './Layout.module.scss';
import particlesStyle from '../../constants/particlesStyle';
import DesktopMenuBar from '../Desktop/DesktopMenuBar/DesktopMenuBar';
import { useHeader } from '../../hooks/useHeader';
import { useMode } from '../../hooks/useMode';
import { Mode } from '../../models';

interface LayoutProps {}

const Layout: FC<LayoutProps> = ({ children }) => {
  const { isHeaderHovered } = useHeader();
  const { mode } = useMode();

  if (mode === Mode.NORMAL) {
    return (
      <div
        className={[styles.Layout_Normal, isHeaderHovered ? styles.HeaderHovered : ''].join(' ')}>
        <Header />
        <ParticleBackground style={particlesStyle} />
        <main className={styles.Layout_Normal_Main}>{children}</main>
        <Footer />
      </div>
    );
  }

  if (mode === Mode.DEV || mode === Mode.NONE) {
    return (
      <div className={styles.Layout_Dev}>
        <DesktopMenuBar />
        <main className={styles.Layout_Dev_Main}>{children}</main>
      </div>
    );
  }

  return null;
};

export default Layout;
