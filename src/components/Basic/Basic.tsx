import React, { FC, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import Layout from '../Layout/Layout';

import styles from './Basic.module.scss';
import Intro from './Intro/Intro';
import ParticleBackground from './ParticleBackground/ParticleBackground';

interface BasicProps extends RouteComponentProps {}

const Basic: FC<BasicProps> = () => {
  const [state, setState] = useState({
    isIntroEnded: false,
  });

  const onIntroEnd = () => {
    setState({ ...state, isIntroEnded: true });
  };

  return (
    <div className={styles.Basic}>
      {state.isIntroEnded ? null : <Intro onIntroEnd={onIntroEnd} />}
      <Layout isDevMode={false} isBasic={true}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi modi voluptate
          expedita? Libero commodi possimus aliquam, in labore officia, unde dolore quidem obcaecati
          iste reprehenderit soluta accusantium eveniet sunt id!
        </p>
      </Layout>
    </div>
  );
};

export default Basic;
