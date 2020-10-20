import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import vscodeIcon from '../../assets/images/Visual_Studio_Code_1.35_icon.svg';

import WindowsIcon from './MenuBar/WindowsIcon/WindowsIcon';

import styles from './Footer.module.scss';
import SearchBar from './MenuBar/SearchBar/SearchBar';
import Clock from './MenuBar/Clock/Clock';
import Speaker from './MenuBar/Speaker/Speaker';

interface FooterProps {
  isDevMode: boolean;
  isBasic: boolean;
}

const Footer: FC<FooterProps> = ({ isDevMode, isBasic }) => {
  let footer = null;

  if (isBasic) {
    footer = <footer className={styles.Footer__Basic}>footer</footer>;
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
