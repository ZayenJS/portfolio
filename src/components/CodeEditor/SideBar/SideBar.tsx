import React, { FC, useState } from 'react';
import { ActivityBarItemName } from '../../../models';
import styles from './SideBar.module.scss';

interface SideBarProps {
  activeItem: ActivityBarItemName;
}

const SideBar: FC<SideBarProps> = ({ activeItem }) => {
  const [isHovered, setIsHovered] = useState(false);
  let sideBarContent;

  switch (activeItem) {
    case 'explorer':
      sideBarContent = (
        <section className={styles.SideBar__Explorer}>
          <header className={styles.SideBar__Explorer__Header}>
            <h2>{activeItem}</h2>
            <div>
              <span>...</span>
            </div>
          </header>
          <main className={styles.SideBar__Explorer__Body}>
            <div
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className={styles.SideBar__Project}>
              <div className={styles.SideBar__Project__Header}>
                <div
                  className={styles.SideBar__Project__Header__Container}
                  style={isHovered ? { width: '45%' } : { width: '100%' }}>
                  <span className={styles.SideBar__Project__Header__Chevron}></span>
                  <h3>portfolio</h3>
                </div>
                {isHovered ? (
                  <div className={styles.SideBar__Project__Header__Actions}>
                    <span
                      title="New File"
                      className={styles.SideBar__Project__Header__Actions__CreateFile}></span>
                    <span
                      title="New Folder"
                      className={styles.SideBar__Project__Header__Actions__CreateFolder}></span>
                    <span
                      title="Refresh Explorer"
                      className={styles.SideBar__Project__Header__Actions__Refresh}></span>
                    <span
                      title="Collapse Folders In Explorer"
                      className={styles.SideBar__Project__Header__Actions__Collapse}></span>
                  </div>
                ) : null}
              </div>
              <div></div>
            </div>
          </main>
        </section>
      );
      break;
    default:
      sideBarContent = null;
  }

  return <div className={styles.SideBar}>{sideBarContent}</div>;
};

export default SideBar;
