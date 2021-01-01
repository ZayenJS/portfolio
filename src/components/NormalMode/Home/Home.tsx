import React, { FC, useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

import { baseTitle } from '../../../utils';

import styles from './Home.module.scss';
import { pageTransition } from '../../../constants/framer-motion';
import AnimatedTitle from './AnimatedTitle/AnimatedTitle';
import Presentation from '../../Presentation/Presentation';
import AccessoryPicker, { Accessories } from '../AccessoryPicker/AccessoryPicker';
import Portal from '../../Portal/Portal';
import Accessory from '../AccessoryPicker/Accessory/Accessory';

interface HomeProps {}

interface HomeState {
  isAccessoriesPickerVisible: boolean;
  accessories: Accessories[];
}

const Home: FC<HomeProps> = () => {
  const [state, setState] = useState<HomeState>({
    isAccessoriesPickerVisible: false,
    accessories: ['mustache', 'top-hat', 'sunglasses'],
  });

  const setAccessories = (accessories: Accessories[]) => {
    setState((prevState) => ({ ...prevState, accessories }));
  };

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
      <motion.section>
        <img
          className={styles.Me}
          src={require('../../../assets/images/david-detour.png')}
          alt=""
        />
        {state.accessories.map((accessory) => (
          <Accessory key={accessory} name={accessory} />
        ))}
        {state.isAccessoriesPickerVisible ? (
          <Portal>
            <AccessoryPicker
              setAccessories={setAccessories}
              selectedAccessories={state.accessories}
              hideAccessoryPicker={() =>
                setState((prevState) => ({ ...prevState, isAccessoriesPickerVisible: false }))
              }
            />
          </Portal>
        ) : null}

        <button onClick={() => setState({ ...state, isAccessoriesPickerVisible: true })}>
          Changer les accessoires
        </button>
      </motion.section>
    </motion.div>
  );
};

export default Home;
