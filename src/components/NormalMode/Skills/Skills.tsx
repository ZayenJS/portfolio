import { motion } from 'framer-motion';
import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { pageTransition } from '../../../constants/framer-motion';
import { baseTitle } from '../../../utils';

import styles from './Skills.module.scss';

interface SkillsProps {}

const Skills: FC<SkillsProps> = () => {
  return (
    <>
      <Helmet>
        <title>{baseTitle} - Compétences</title>
      </Helmet>

      <motion.section
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageTransition}
        className={styles.Skills}>
        <div>Skills Component</div>
        <a
          href="/competences"
          download={require('../../../assets/cv-david-nogueira-developpeur-web.pdf')}>
          Télécharger mon cv
        </a>
      </motion.section>
    </>
  );
};

export default Skills;
