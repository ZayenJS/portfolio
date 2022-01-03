import { FC } from 'react';

import logoIcon from '../../assets/images/logo-icon.svg';
import { useMode } from '../../hooks/useMode';
import { Mode } from '../../models';

import classes from './Footer.module.scss';

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  const { mode } = useMode();
  if (mode === Mode.NORMAL) {
    return (
      <footer className={classes.Footer__Normal}>
        <div className={classes.Footer__Normal__Content}>
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
  //     <footer className={classes.Footer__Dev}>
  //       <section className={classes.Footer__Dev__Left}>
  //         <WindowsIcon />
  //         <SearchBar />
  //         <div title="Explorateur de fichier" className={classes.Footer__Dev__FolderExplorer}></div>
  //         <div title="Spotify" className={classes.Footer__Dev__Spotify}></div>
  //         {isDevMode ? (
  //           <NavLink
  //             title="Visual Studio Code"
  //             to="/code/readme.md"
  //             className={classes.Footer__Dev__VscodeIcon__Container}>
  //             <img className={classes.Footer__Dev__VscodeIcon} src={vscodeIcon} alt="vscode icon" />
  //           </NavLink>
  //         ) : (
  //           <div title="Visual Studio Code" className={classes.Footer__Dev__VscodeIcon__Container}>
  //             <img className={classes.Footer__Dev__VscodeIcon} src={vscodeIcon} alt="vscode icon" />
  //           </div>
  //         )}
  //         <div title="Discord" className={classes.Footer__Dev__Discord}></div>
  //       </section>
  //       <section className={classes.Footer__Dev__Right}>
  //         <span className={classes.Footer__Dev__NULL}></span>
  //         <span className={classes.Footer__Dev__MoreIcons}></span>
  //         <Speaker />
  //         <span className={classes.Footer__Dev__Lang}>FRA</span>
  //         <Clock />
  //       </section>
  //     </footer>
  //   );
  // }

  return null; // TODO: notfound component
};

export default Footer;
