import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import SearchBar from './MenuBar/SearchBar/SearchBar';
import Clock from './MenuBar/Clock/Clock';
import Speaker from './MenuBar/Speaker/Speaker';

import vscodeIcon from '../../assets/images/Visual_Studio_Code_1.35_icon.svg';
import WindowsIcon from './MenuBar/WindowsIcon/WindowsIcon';
import logoIcon from '../../assets/images/logo-icon.svg';

import styles from './Footer.module.scss';

interface FooterProps {
  isDevMode: boolean;
  setIsDevMode?: () => void;
  isBasic: boolean;
}

const Footer: FC<FooterProps> = ({ isDevMode, setIsDevMode, isBasic }) => {
  let footer = null;

  if (isBasic) {
    footer = (
      <footer className={styles.Footer__Basic}>
        <div className={styles.Footer__Basic__Content}>
          <div>
            <img style={{ width: '2rem' }} src={logoIcon} alt="" />
            <span>&copy; 2020 tous droits reservés.</span>
          </div>
          <span>-</span>
          <span onClick={setIsDevMode}>mode dev</span>
        </div>
      </footer>
    );
  } else if (isDevMode || (!isDevMode && !isBasic)) {
    footer = (
      <footer className={styles.Footer__Dev}>
        <section className={styles.Footer__Dev__Left}>
          <WindowsIcon />
          <SearchBar />
          <div title="Explorateur de fichier" className={styles.Footer__Dev__FolderExplorer}></div>
          <div title="Spotify" className={styles.Footer__Dev__Spotify}></div>
          {isDevMode ? (
            <NavLink
              title="Visual Studio Code"
              to="/code/readme.md"
              className={styles.Footer__Dev__VscodeIcon__Container}>
              <img className={styles.Footer__Dev__VscodeIcon} src={vscodeIcon} alt="vscode icon" />
            </NavLink>
          ) : (
            <div title="Visual Studio Code" className={styles.Footer__Dev__VscodeIcon__Container}>
              <img className={styles.Footer__Dev__VscodeIcon} src={vscodeIcon} alt="vscode icon" />
            </div>
          )}
          <div title="Discord" className={styles.Footer__Dev__Discord}></div>
        </section>
        <section className={styles.Footer__Dev__Right}>
          <span className={styles.Footer__Dev__NULL}></span>
          <span className={styles.Footer__Dev__MoreIcons}></span>
          <Speaker />
          <span className={styles.Footer__Dev__Lang}>FRA</span>
          <Clock />
        </section>
      </footer>
    );
  }

  return footer;
};

export default Footer;
