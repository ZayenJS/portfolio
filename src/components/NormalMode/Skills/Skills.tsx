import React, { FC, useEffect } from 'react';
import { baseTitle } from '../../../utils';

import styles from './Skills.module.scss';

interface SkillsProps {}

const Skills: FC<SkillsProps> = () => {
  useEffect(() => {
    document.title = `${baseTitle} - Compétences`;
  }, []);

  return (
    <div className={styles.Skills}>
      <div>Skills Component</div>
      <a
        href="/competences"
        download={require('../../../assets/cv-david-nogueira-developpeur-web.pdf')}>
        Télécharger mon cv
      </a>
    </div>
  );
};

export default Skills;
