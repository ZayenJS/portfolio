import React, { FC, SetStateAction } from 'react';

import { ActivityBarItemName } from '../../../../models';

import styles from './Explorer.module.scss';
import Project from './Project/Project';

interface ExplorerProps {
  activeItem: ActivityBarItemName;
  isHovered: boolean;
  setIsHovered: React.Dispatch<SetStateAction<boolean>>;
}

const Explorer: FC<ExplorerProps> = ({ activeItem, isHovered, setIsHovered }) => {
  return (
    <section className={styles.Explorer}>
      <header className={styles.Explorer__Header}>
        <h2>{activeItem}</h2>
        <div>
          <span></span>
        </div>
      </header>
      <main className={styles.Explorer__Body}>
        <Project isHovered={isHovered} setIsHovered={setIsHovered} />
      </main>
    </section>
  );
};

export default Explorer;
