import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import vscodeIcon from '../../assets/images/Visual_Studio_Code_1.35_icon.svg';

import WindowsIcon from './MenuBar/WindowsIcon/WindowsIcon';

import styles from './Footer.module.scss';
import SearchBar from './MenuBar/SearchBar/SearchBar';
import Clock from './MenuBar/Clock/Clock';
import Speaker from './MenuBar/Speaker/Speaker';

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <footer className={styles.Footer}>
      <section className={styles.Footer__Left}>
        <WindowsIcon icon={['fab', 'windows']} />
        <SearchBar />
        <div title="Explorateur de fichier" className={styles.Footer__FolderExplorer}></div>
        <div title="Spotify" className={styles.Footer__Spotify}></div>
        <NavLink
          title="Visual Studio Code"
          to="/code/readme.md"
          className={styles.Footer__VscodeIcon__Container}>
          <img className={styles.Footer__VscodeIcon} src={vscodeIcon} alt="vscode icon" />
        </NavLink>
        <div title="Discord" className={styles.Footer__Discord}></div>
      </section>
      <section className={styles.Footer__Right}>
        <span className={styles.Footer__NULL}></span>
        <span className={styles.Footer__MoreIcons}></span>
        <Speaker />
        <span className={styles.Footer__Lang}>FRA</span>
        <Clock />
      </section>
    </footer>
  );
};

export default Footer;
