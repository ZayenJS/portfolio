import React, { FC, SetStateAction, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import reactTs from '../../../../../../assets/images/icons/react_ts.svg';
import html from '../../../../../../assets/images/icons/html.svg';
import publicFolder from '../../../../../../assets/images/icons/folder-public.svg';
import openPublicFolder from '../../../../../../assets/images/icons/folder-public-open.svg';
import srcFolder from '../../../../../../assets/images/icons/folder-src.svg';
import openSrcFolder from '../../../../../../assets/images/icons/folder-src-open.svg';

import styles from './Folder.module.scss';
import { IProject } from '../../../../../../models';

interface FolderProps {
  name: string;
  indentSize?: number;
  isCollapsed: IProject;
  setIsCollapsed: React.Dispatch<SetStateAction<IProject>>;
}

const Folder: FC<FolderProps> = ({ name, indentSize = 0, isCollapsed, setIsCollapsed }) => {
  let content;

  switch (name) {
    case 'public':
      content = (
        <div className={styles.Folder}>
          <div>
            <header
              onClick={() => setIsCollapsed({ ...isCollapsed, public: !isCollapsed.public })}
              style={{ paddingLeft: `${indentSize}rem` }}>
              <span
                style={
                  isCollapsed.public ? { transform: 'rotate(0)' } : { transform: 'rotate(90deg)' }
                }></span>
              <img src={publicFolder} alt="" />
              <span>{name}</span>
            </header>
            {isCollapsed.public ? null : (
              <NavLink
                activeClassName="active-file"
                style={{ paddingLeft: `${indentSize + 1.75}rem` }}
                to="/code/index.html"
                className={[styles.Folder__Items, 'folder-item'].join(' ')}>
                <img src={html} alt="" />
                index.html
              </NavLink>
            )}
          </div>
        </div>
      );
      break;
    case 'src':
      content = (
        <div className={styles.Folder}>
          <div>
            <header
              onClick={() => setIsCollapsed({ ...isCollapsed, src: !isCollapsed.src })}
              style={{ paddingLeft: `${indentSize}rem` }}>
              <span
                style={
                  isCollapsed.src ? { transform: 'rotate(0)' } : { transform: 'rotate(90deg)' }
                }></span>
              <img src={openSrcFolder} alt="" />
              <span>{name}</span>
            </header>
            {isCollapsed.src ? null : (
              <NavLink
                activeClassName="active-file"
                style={{ paddingLeft: `${indentSize + 1.75}rem` }}
                to="/code/contactme.tsx"
                className={[styles.Folder__Items, 'folder-item'].join(' ')}>
                <img src={reactTs} alt="" />
                ContactMe.tsx
              </NavLink>
            )}
          </div>
        </div>
      );
      break;
    default:
      content = null;
      break;
  }

  return content;
};

export default Folder;
