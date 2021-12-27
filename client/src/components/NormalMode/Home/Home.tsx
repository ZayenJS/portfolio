import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

import { pageTransition } from '../../../constants/framer-motion';

import AnimatedTitle from './AnimatedTitle/AnimatedTitle';
import Presentation from '../../Presentation/Presentation';
import InteractivePicture from '../../InteractivePicture/InteractivePicture';

import { baseTitle } from '../../../utils';
import { State } from '../../../store/reducers';
import image from '../../../assets/images/david-detour.png';

import styles from './Home.module.scss';

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const { selectedAccessories } = useSelector((state: State) => state.normalMode.global);

  useEffect(() => {
    let audio = new Audio();

    if (
      selectedAccessories.includes('thug-life-glasses') &&
      selectedAccessories.includes('blunt-thug-life')
    ) {
      audio.src = require('../../../assets/sounds/thug-life-music.mp3');
    } else if (
      selectedAccessories.includes('xmas-beard') &&
      selectedAccessories.includes('xmas-hat') &&
      selectedAccessories.includes('round-glasses')
    ) {
      audio.src = require('../../../assets/sounds/all-i-want.mp3');
    } else if (
      selectedAccessories.includes('black-suit-white-shirt') &&
      selectedAccessories.includes('bow-tie') &&
      selectedAccessories.includes('rose')
    ) {
      audio.src = require('../../../assets/sounds/godfather.mp3');
    }

    if (audio.src) {
      audio.play();
    }

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [selectedAccessories]);

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
      <InteractivePicture src={image} />
    </motion.div>
  );
};

export default Home;
