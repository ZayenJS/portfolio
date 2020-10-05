import React, { FC, SetStateAction } from 'react';

import { Link } from 'react-router-dom';

import Actions from './Actions/Actions';

import readme from '../../../../../assets/images/icons/readme.svg';
import yarn from '../../../../../assets/images/icons/yarn.svg';

import styles from './Project.module.scss';
import Folder from './Folder/Folder';

interface ProjectProps {
  isHovered: boolean;
  setIsHovered: React.Dispatch<SetStateAction<boolean>>;
}

const Project: FC<ProjectProps> = ({ isHovered, setIsHovered }) => {
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={styles.Project}>
      <header className={styles.Project__Header}>
        <div
          className={styles.Project__Header__Container}
          style={isHovered ? { width: '45%' } : { width: '100%' }}>
          <span className={styles.Project__Header__Chevron}></span>
          <h3>portfolio</h3>
        </div>
        {isHovered ? <Actions /> : null}
      </header>
      <div className={styles.Project__Body}>
        <div className={styles.Project__Body__RootFolders}>
          <Folder indentSize={0} name="public" />
          <Folder indentSize={0} name="src" />
          <Link to="/code/readme.md" className={styles.Project__Body__Items}>
            <img src={readme} alt="" />
            README.md
          </Link>
          <span className={styles.Project__Body__Items}>
            <img src={yarn} alt="" />
            yarn.lock
          </span>
        </div>
      </div>
    </div>
  );
};

export default Project;
