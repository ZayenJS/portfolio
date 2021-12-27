import { FC } from 'react';

import logoIcon from '../../assets/images/logo-icon.svg';

import styles from './Footer.module.scss';

interface FooterProps {
  isNormalMode: boolean;
}

const Footer: FC<FooterProps> = ({ isNormalMode }) => {
  if (isNormalMode) {
    return (
      <footer className={styles.Footer__Normal}>
        <div className={styles.Footer__Normal__Content}>
          <div>
            <img style={{ width: '2rem' }} src={logoIcon} alt="" />
            <span>&copy; 2022 tous droits reservés.</span>
          </div>
        </div>
      </footer>
    );
  }
  // else if (isDevMode || (!isDevMode && !isNormalMode)) {
  //   footer = (
  //     <footer className={styles.Footer__Dev}>
  //       <section className={styles.Footer__Dev__Left}>
  //         <WindowsIcon />
  //         <SearchBar />
  //         <div title="Explorateur de fichier" className={styles.Footer__Dev__FolderExplorer}></div>
  //         <div title="Spotify" className={styles.Footer__Dev__Spotify}></div>
  //         {isDevMode ? (
  //           <NavLink
  //             title="Visual Studio Code"
  //             to="/code/readme.md"
  //             className={styles.Footer__Dev__VscodeIcon__Container}>
  //             <img className={styles.Footer__Dev__VscodeIcon} src={vscodeIcon} alt="vscode icon" />
  //           </NavLink>
  //         ) : (
  //           <div title="Visual Studio Code" className={styles.Footer__Dev__VscodeIcon__Container}>
  //             <img className={styles.Footer__Dev__VscodeIcon} src={vscodeIcon} alt="vscode icon" />
  //           </div>
  //         )}
  //         <div title="Discord" className={styles.Footer__Dev__Discord}></div>
  //       </section>
  //       <section className={styles.Footer__Dev__Right}>
  //         <span className={styles.Footer__Dev__NULL}></span>
  //         <span className={styles.Footer__Dev__MoreIcons}></span>
  //         <Speaker />
  //         <span className={styles.Footer__Dev__Lang}>FRA</span>
  //         <Clock />
  //       </section>
  //     </footer>
  //   );
  // }

  return null; // TODO: notfound component
};

export default Footer;
