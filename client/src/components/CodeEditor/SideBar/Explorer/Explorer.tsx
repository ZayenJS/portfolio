import React, { FC, SetStateAction } from 'react';

import { ActivityBarItemName } from '../../../../models';

import classes from './Explorer.module.scss';
import Project from './Project/Project';

interface ExplorerProps {
  activeItem: ActivityBarItemName;
  isHovered: boolean;
  setIsHovered: React.Dispatch<SetStateAction<boolean>>;
}

const Explorer: FC<ExplorerProps> = ({ activeItem, isHovered, setIsHovered }) => {
  return (
    <section className={classes.Explorer}>
      <header className={classes.Explorer__Header}>
        <h2>{activeItem}</h2>
        <div>
          <span></span>
        </div>
      </header>
      <main className={classes.Explorer__Body}>
        <Project isHovered={isHovered} setIsHovered={setIsHovered} />
      </main>
    </section>
  );
};

export default Explorer;
