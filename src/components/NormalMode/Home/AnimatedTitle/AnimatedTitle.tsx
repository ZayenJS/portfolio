import React, { FC } from 'react';
import AnimatedText from '../../../AnimatedText/AnimatedText';

import styles from './AnimatedTitle.module.scss';

interface AnimatedTitleProps {}

const AnimatedTitle: FC<AnimatedTitleProps> = () => {
  return (
    <div className={styles.AnimatedTitle}>
      <h1>
        <AnimatedText
          appearingAnimation="roll-in-left"
          animationName="spin-two-turns"
          delay={250}
          text="H"
        />
        <AnimatedText
          appearingAnimation="bounce-in-appear"
          animationName="rubber-band"
          delay={450}
          text="e"
        />
        <AnimatedText
          appearingAnimation="bounce-in-forward"
          animationName="rubber-band"
          delay={350}
          text="l"
        />
        <AnimatedText
          appearingAnimation="bounce-in-appear"
          animationName="rubber-band"
          delay={400}
          text="l"
        />
        <AnimatedText
          appearingAnimation="bounce-in-forward"
          animationName="rubber-band"
          delay={450}
          text="o"
        />{' '}
        <AnimatedText
          appearingAnimation="roll-in-left"
          animationName="spin-two-turns"
          delay={500}
          text="W"
        />
        <AnimatedText
          appearingAnimation="bounce-in-appear"
          animationName="rubber-band"
          delay={700}
          text="o"
        />
        <AnimatedText
          appearingAnimation="bounce-in-forward"
          animationName="rubber-band"
          delay={750}
          text="r"
        />
        <AnimatedText
          appearingAnimation="bounce-in-appear"
          animationName="rubber-band"
          delay={800}
          text="l"
        />
        <AnimatedText
          appearingAnimation="bounce-in-forward"
          animationName="rubber-band"
          delay={850}
          text="d"
        />{' '}
        <AnimatedText
          appearingAnimation="bounce-in-appear"
          animationName="rubber-band"
          delay={900}
          text="!"
        />{' '}
        <span role="img" aria-label="émoji main qui fait coucou">
          <AnimatedText
            appearingAnimation="wave-appear"
            animationName="wave"
            delay={1000}
            text="👋🏻"
          />
        </span>
        <br />
        {['M', 'o', 'i'].map((letter, i) => (
          <AnimatedText
            key={i + letter}
            text={letter}
            delay={700 + (i + 1) * 50}
            appearingAnimation="bounce-in-appear"
            animationName="rubber-band"
          />
        ))}{' '}
        {['c', "'", 'e', 's', 't'].map((letter, i) => (
          <AnimatedText
            appearingAnimation="bounce-in-appear"
            delay={900 + (i + 1) * 50}
            animationName="rubber-band"
            text={letter}
          />
        ))}{' '}
        {['D', 'a', 'v', 'i', 'd', ','].map((letter, i) => (
          <AnimatedText
            appearingAnimation="bounce-in-appear"
            delay={1150 + (i + 1) * 50}
            animationName="rubber-band"
            text={letter}
          />
        ))}{' '}
        <br />
        <AnimatedText
          appearingAnimation={'roll-in-left'}
          delay={600}
          animationName="spin-two-turns"
          text="d"
        />
        {['é', 'v', 'e', 'l', 'o', 'p', 'p', 'e', 'u', 'r'].map((letter, i) => (
          <AnimatedText
            appearingAnimation={'bounce-in-appear'}
            delay={600 + (i + 1) * 75}
            animationName="rubber-band"
            text={letter}
          />
        ))}{' '}
        <AnimatedText
          appearingAnimation={'roll-in-left'}
          delay={1000}
          animationName="spin-two-turns"
          text="w"
        />
        <AnimatedText
          appearingAnimation="bounce-in-appear"
          delay={1500}
          animationName="rubber-band"
          text="e"
        />
        <AnimatedText
          appearingAnimation="bounce-in-appear"
          delay={1550}
          animationName="rubber-band"
          text="b"
        />
        <AnimatedText
          appearingAnimation={'bounce-in-top'}
          delay={1500}
          animationName="rubber-band"
          text="."
        />{' '}
      </h1>
      <h2>
        <AnimatedText
          appearingAnimation="slit-in"
          delay={900}
          animationName="pulsate"
          text="Développeur"
        />{' '}
        <AnimatedText
          appearingAnimation="slit-in"
          delay={900}
          animationName="pulsate"
          text="JavaScript"
        />
      </h2>
    </div>
  );
};

export default AnimatedTitle;
