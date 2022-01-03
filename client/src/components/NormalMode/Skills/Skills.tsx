import { motion } from 'framer-motion';
import { FC, useState } from 'react';
import { Helmet } from 'react-helmet';
import { pageTransition } from '../../../constants/framer-motion';
import { useHeader } from '../../../hooks/useHeader';
import { useScrollToTop } from '../../../hooks/useScrollToTop';
import { baseTitle } from '../../../utils';

import classes from './Skills.module.scss';
import SkillsSphere from './SkillsSphere/SkillsSphere';

interface SkillsProps {}

const resume = require('../../../assets/cv-david-nogueira-developpeur-web.pdf');

const Skills: FC<SkillsProps> = () => {
  const { isHeaderHovered } = useHeader();
  const [state, setState] = useState({
    resumeClasses: `${classes.Resume_Link} ${classes.Mounting}`,
  });

  useScrollToTop();

  const updateResumeLinkClasses = () => {
    setState((ps) => ({ ...ps, resumeClasses: classes.Resume_Link }));
  };

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
        className={classes.Container}>
        <SkillsSphere />
        <a
          className={`${state.resumeClasses} ${isHeaderHovered ? classes.Header_Hovered : ''}`}
          onAnimationEnd={updateResumeLinkClasses}
          href="/competences"
          download={resume}>
          Télécharger mon cv
        </a>
      </motion.section>
    </>
  );
};

export default Skills;
