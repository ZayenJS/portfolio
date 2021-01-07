import React, { FC } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

import { pageTransition } from '../../../constants/framer-motion';

import AnimatedTitle from './AnimatedTitle/AnimatedTitle';
import Presentation from '../../Presentation/Presentation';
import InteractivePicture from '../../InteractivePicture/InteractivePicture';

import { baseTitle } from '../../../utils';

import styles from './Home.module.scss';

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      className={styles.Home}>
      <Helmet>
        <title>{baseTitle} - Accueil</title>
      </Helmet>
      <section>
        <AnimatedTitle />
        <Presentation
          classNames={{
            container: styles.Home__Presentation__Container,
            intro: styles.Home__Presentation__Intro,
            cta: styles.Home__Presentation__Cta,
          }}
          appearingAnimation="fade-in-forward"
          delay={2300}
        />
      </section>
      <InteractivePicture src={require('../../../assets/images/david-detour.png')} />
    </motion.div>
  );
};

export default Home;
