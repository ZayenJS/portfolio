import { motion } from 'framer-motion';
import { FC } from 'react';
import { Helmet } from 'react-helmet';
import { pageTransition } from '../../../constants/framer-motion';
import { baseTitle } from '../../../utils';

import styles from './Skills.module.scss';

interface SkillsProps {}

const resume = require('../../../assets/cv-david-nogueira-developpeur-web.pdf');

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
        <a href="/competences" download={resume}>
          Télécharger mon cv
        </a>
      </motion.section>
    </>
  );
};

export default Skills;
