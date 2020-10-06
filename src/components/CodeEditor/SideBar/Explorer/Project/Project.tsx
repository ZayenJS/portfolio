import React, { FC, SetStateAction, useState } from 'react';

import { Link, NavLink } from 'react-router-dom';

import Actions from './Actions/Actions';

import readme from '../../../../../assets/images/icons/readme.svg';
import yarn from '../../../../../assets/images/icons/yarn.svg';

import styles from './Project.module.scss';
import Folder from './Folder/Folder';
import { IProject } from '../../../../../models';

interface ProjectProps {
  isHovered: boolean;
  setIsHovered: React.Dispatch<SetStateAction<boolean>>;
}

const Project: FC<ProjectProps> = ({ isHovered, setIsHovered }) => {
  const [isCollapsed, setIsCollapsed] = useState<IProject>({
    project: false,
    src: false,
    public: false,
  });

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={[styles.Project, 'project'].join(' ')}>
      <header
        onClick={() => setIsCollapsed({ ...isCollapsed, project: !isCollapsed.project })}
        className={styles.Project__Header}>
        <div
          className={styles.Project__Header__Container}
          style={isHovered ? { width: '45%' } : { width: '100%' }}>
          <span
            style={isCollapsed.project ? { transform: 'rotate(0)' } : {}}
            className={styles.Project__Header__Chevron}></span>
          <h3>portfolio</h3>
        </div>
        {isHovered ? <Actions /> : null}
      </header>
      {isCollapsed.project ? null : (
        <div className={styles.Project__Body}>
          <div className={styles.Project__Body__RootFolders}>
            <Folder
              isCollapsed={isCollapsed}
              setIsCollapsed={setIsCollapsed}
              indentSize={0}
              name="public"
            />
            <Folder
              isCollapsed={isCollapsed}
              setIsCollapsed={setIsCollapsed}
              indentSize={0}
              name="src"
            />
            <NavLink
              activeClassName="active-file"
              to="/code/readme.md"
              className={styles.Project__Body__Items}>
              <img src={readme} alt="" />
              README.md
            </NavLink>
            <span className={styles.Project__Body__Items}>
              <img src={yarn} alt="" />
              yarn.lock
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
