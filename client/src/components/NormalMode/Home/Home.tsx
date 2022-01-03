import { FC, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

import { pageTransition } from '../../../constants/framer-motion';

import AnimatedTitle from './AnimatedTitle/AnimatedTitle';
import Presentation from '../../Presentation/Presentation';
import InteractivePicture from '../../InteractivePicture/InteractivePicture';

import { baseTitle } from '../../../utils';
import image from '../../../assets/images/david-detour-shirtless.png';

import classes from './Home.module.scss';
import { useAccessories } from '../../../hooks/useAccessories';
import { useScrollToTop } from '../../../hooks/useScrollToTop';

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const { selectedAccessories } = useAccessories();

  useScrollToTop();

  useEffect(() => {
    const audio = new Audio();
    const selectedAccessoriesNames = selectedAccessories.map((a) => a.name);

    if (
      selectedAccessoriesNames.includes('thug-life-glasses') &&
      selectedAccessoriesNames.includes('blunt-thug-life')
    ) {
      audio.src = require('../../../assets/sounds/thug-life-music.mp3');
    } else if (
      selectedAccessoriesNames.includes('xmas-beard') &&
      selectedAccessoriesNames.includes('xmas-hat') &&
      selectedAccessoriesNames.includes('round-glasses')
    ) {
      audio.src = require('../../../assets/sounds/all-i-want.mp3');
    } else if (
      selectedAccessoriesNames.includes('black-suit-white-shirt') &&
      selectedAccessoriesNames.includes('bow-tie') &&
      selectedAccessoriesNames.includes('rose')
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
      className={classes.Home}>
      <Helmet>
        <title>{baseTitle} - Accueil</title>
      </Helmet>
      <section>
        <AnimatedTitle />
        <Presentation
          classNames={{
            container: classes.Home__Presentation__Container,
            intro: classes.Home__Presentation__Intro,
            cta: classes.Home__Presentation__Cta,
          }}
          appearingAnimation="fade-in-forward"
          delay={2300}
        />
      </section>
      <hr />
      <InteractivePicture src={image} />
    </motion.div>
  );
};

export default Home;
