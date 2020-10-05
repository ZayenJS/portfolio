import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import reactTs from '../../../../../../assets/images/icons/react_ts.svg';
import html from '../../../../../../assets/images/icons/html.svg';
import publicFolder from '../../../../../../assets/images/icons/folder-public.svg';
import openPublicFolder from '../../../../../../assets/images/icons/folder-public-open.svg';
import srcFolder from '../../../../../../assets/images/icons/folder-src.svg';
import openSrcFolder from '../../../../../../assets/images/icons/folder-src-open.svg';

import styles from './Folder.module.scss';

interface FolderProps {
  name: string;
  indentSize?: number;
}

const Folder: FC<FolderProps> = ({ name, indentSize = 0 }) => {
  let content;

  switch (name) {
    case 'public':
      content = (
        <div className={styles.Folder}>
          <div>
            <header style={{ paddingLeft: `${indentSize}rem` }}>
              <span></span>
              <img src={publicFolder} alt="" />
              <span>{name}</span>
            </header>
            <Link
              style={{ paddingLeft: `${indentSize + 1.75}rem` }}
              to="/code/index.html"
              className={styles.Folder__Items}>
              <img src={html} alt="" />
              index.html
            </Link>
          </div>
        </div>
      );
      break;
    case 'src':
      content = (
        <div className={styles.Folder}>
          <div>
            <header style={{ paddingLeft: `${indentSize}rem` }}>
              <span></span>
              <img src={openSrcFolder} alt="" />
              <span>{name}</span>
            </header>
            <Link
              style={{ paddingLeft: `${indentSize + 1.75}rem` }}
              to="/code/hireme.tsx"
              className={styles.Folder__Items}>
              <img src={reactTs} alt="" />
              HireMe.tsx
            </Link>
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
