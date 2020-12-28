import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { baseTitle } from '../../../utils';

import styles from './Skills.module.scss';

interface SkillsProps {}

const Skills: FC<SkillsProps> = () => {
  return (
    <>
      <Helmet>
        <title>{baseTitle} - Compétences</title>
      </Helmet>

      <div className={styles.Skills}>
        <div>Skills Component</div>
        <a
          href="/competences"
          download={require('../../../assets/cv-david-nogueira-developpeur-web.pdf')}>
          Télécharger mon cv
        </a>
      </div>
    </>
  );
};

export default Skills;
