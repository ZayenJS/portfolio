import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { baseTitle } from '../../../utils';
import AnimatedText from '../../AnimatedText/AnimatedText';

import styles from './Home.module.scss';

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <div className={styles.Home}>
      <Helmet>
        <title>{baseTitle} - Accueil</title>
      </Helmet>

      <h1>
        <AnimatedText
          appearingAnimation="roll-in-left"
          animationName="spin"
          delay={250}
          letter="H"
        />
        <AnimatedText
          appearingAnimation="bounce-in"
          animationName="rubber-band"
          delay={450}
          letter="e"
        />
        <AnimatedText
          appearingAnimation="bounce-in-forward"
          animationName="rubber-band"
          delay={350}
          letter="l"
        />
        <AnimatedText
          appearingAnimation="bounce-in"
          animationName="rubber-band"
          delay={400}
          letter="l"
        />
        <AnimatedText
          appearingAnimation="bounce-in-forward"
          animationName="rubber-band"
          delay={450}
          letter="o"
        />{' '}
        <AnimatedText
          appearingAnimation="roll-in-left"
          animationName="spin"
          delay={500}
          letter="W"
        />
        <AnimatedText
          appearingAnimation="bounce-in"
          animationName="rubber-band"
          delay={700}
          letter="o"
        />
        <AnimatedText
          appearingAnimation="bounce-in-forward"
          animationName="rubber-band"
          delay={750}
          letter="r"
        />
        <AnimatedText
          appearingAnimation="bounce-in"
          animationName="rubber-band"
          delay={800}
          letter="l"
        />
        <AnimatedText
          appearingAnimation="bounce-in-forward"
          animationName="rubber-band"
          delay={850}
          letter="d"
        />{' '}
        <AnimatedText
          appearingAnimation="bounce-in"
          animationName="rubber-band"
          delay={900}
          letter="!"
        />{' '}
        <span role="img" aria-label="émoji main qui fait coucou">
          <AnimatedText
            appearingAnimation="wave-appear"
            animationName="wave"
            delay={1000}
            letter="👋🏻"
          />
        </span>
        <br />
        <AnimatedText
          appearingAnimation="bounce-in"
          delay={250}
          animationName="rubber-band"
          letter="J"
        />
        <AnimatedText
          appearingAnimation="bounce-in"
          delay={300}
          animationName="rubber-band"
          letter="e"
        />{' '}
        <AnimatedText
          appearingAnimation="bounce-in"
          delay={450}
          animationName="rubber-band"
          letter="s"
        />
        <AnimatedText
          appearingAnimation="bounce-in"
          delay={500}
          animationName="rubber-band"
          letter="u"
        />
        <AnimatedText
          appearingAnimation="bounce-in"
          delay={550}
          animationName="rubber-band"
          letter="i"
        />
        <AnimatedText
          appearingAnimation="bounce-in"
          delay={600}
          animationName="rubber-band"
          letter="s"
        />{' '}
        <AnimatedText
          appearingAnimation={'bounce-in'}
          delay={650}
          animationName="rubber-band"
          letter="D"
        />
        <AnimatedText
          appearingAnimation={'bounce-in'}
          delay={700}
          animationName="rubber-band"
          letter="a"
        />
        <AnimatedText
          appearingAnimation={'bounce-in'}
          delay={750}
          animationName="rubber-band"
          letter="v"
        />
        <AnimatedText
          appearingAnimation={'bounce-in'}
          delay={800}
          animationName="rubber-band"
          letter="i"
        />
        <AnimatedText
          appearingAnimation={'bounce-in'}
          delay={850}
          animationName="rubber-band"
          letter="d"
        />
        <AnimatedText
          appearingAnimation={'bounce-in'}
          delay={850}
          animationName="rubber-band"
          letter=","
        />{' '}
        <br />
        <AnimatedText
          appearingAnimation={'roll-in-left'}
          delay={600}
          animationName="spin"
          letter="d"
        />
        <AnimatedText
          appearingAnimation={'bounce-in'}
          delay={950}
          animationName="rubber-band"
          letter="é"
        />
        <AnimatedText
          appearingAnimation={'bounce-in'}
          delay={1000}
          animationName="rubber-band"
          letter="v"
        />
        <AnimatedText
          appearingAnimation={'bounce-in'}
          delay={1050}
          animationName="rubber-band"
          letter="e"
        />
        <AnimatedText
          appearingAnimation={'bounce-in'}
          delay={1100}
          animationName="rubber-band"
          letter="l"
        />
        <AnimatedText
          appearingAnimation={'bounce-in'}
          delay={1150}
          animationName="rubber-band"
          letter="o"
        />
        <AnimatedText
          appearingAnimation={'bounce-in'}
          delay={1200}
          animationName="rubber-band"
          letter="p"
        />
        <AnimatedText
          appearingAnimation={'bounce-in'}
          delay={1250}
          animationName="rubber-band"
          letter="p"
        />
        <AnimatedText
          appearingAnimation={'bounce-in'}
          delay={1300}
          animationName="rubber-band"
          letter="e"
        />
        <AnimatedText
          appearingAnimation={'bounce-in'}
          delay={1350}
          animationName="rubber-band"
          letter="u"
        />
        <AnimatedText
          appearingAnimation={'bounce-in'}
          delay={1400}
          animationName="rubber-band"
          letter="r"
        />{' '}
        <AnimatedText
          appearingAnimation={'roll-in-left'}
          delay={1000}
          animationName="spin"
          letter="w"
        />
        <AnimatedText
          appearingAnimation={'bounce-in'}
          delay={1500}
          animationName="rubber-band"
          letter="e"
        />
        <AnimatedText
          appearingAnimation={'bounce-in'}
          delay={1550}
          animationName="rubber-band"
          letter="b"
        />
        <AnimatedText
          appearingAnimation={'bounce-in-top'}
          delay={1500}
          animationName="rubber-band"
          letter="."
        />{' '}
      </h1>
      <h2>
        <AnimatedText
          appearingAnimation="slit-in"
          delay={900}
          animationName="pulsate"
          letter="Développeur"
        />{' '}
        <AnimatedText
          appearingAnimation="slit-in"
          delay={900}
          animationName="pulsate"
          letter="JavaScript"
        />
      </h2>
    </div>
  );
};

export default Home;
