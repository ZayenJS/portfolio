import { FC } from 'react';

import ParticleBackground from '../NormalMode/ParticleBackground/ParticleBackground';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

import styles from './Layout.module.scss';
import particlesStyle from '../../constants/particlesStyle';
import { useSelector } from 'react-redux';
import { State } from '../../store/reducers';
import DesktopMenuBar from '../Desktop/DesktopMenuBar/DesktopMenuBar';
import DesktopDock from '../Desktop/DesktopDock/DesktopDock';

interface LayoutProps {
  isDevMode: boolean;
  isNormalMode: boolean;
}

const Layout: FC<LayoutProps> = ({ children, isDevMode, isNormalMode }) => {
  const { isHeaderHovered } = useSelector((state: State) => state.normalMode.global);

  if (isNormalMode) {
    return (
      <div
        className={[styles.Layout_Normal, isHeaderHovered ? styles.HeaderHovered : ''].join(' ')}>
        <Header isNormalMode={true} />
        <ParticleBackground style={particlesStyle} />
        <main className={styles.Layout_Normal_Main}>{children}</main>
        <Footer isNormalMode={true} />
      </div>
    );
  }

  if (isDevMode || (!isDevMode && !isNormalMode)) {
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
