import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimationStyle } from '../../models';
import AnimatedText from '../AnimatedText/AnimatedText';

import styles from './Presentation.module.scss';

interface PresentationProps {
  appearingAnimation?: AnimationStyle;
  delay?: number;
  classNames?: {
    container?: string;
    intro?: string;
    cta?: string;
  };
}

const Presentation: FC<PresentationProps> = ({ classNames, appearingAnimation, delay }) => {
  const [state, setState] = useState({ isCtaHovered: false });

  let baseClassname = styles.Presentation;
  let appearingAnimationClass = '';

  switch (appearingAnimation) {
    case 'fade-in-forward':
      appearingAnimationClass += 'FadeInForward';
      break;
    default:
      break;
  }

  baseClassname += ` ${styles[appearingAnimationClass]}`;

  const animationDelay = delay ? `${delay}ms` : '0ms';

  return (
    <div style={{ animationDelay }} className={[baseClassname, classNames?.container].join(' ')}>
      <p className={classNames?.intro}>
        Après plusieurs années à faire des petits boulots qui ne me correspondaient pas, j'ai entamé
        en Janvier 2020 une reconversion dans ce qui me plait depuis toujours :{' '}
        <AnimatedText animationName="bounce-in" letter="le Web" />.
      </p>
      <p>
        J'ai d'abord commencé par me former en autodidacte puis j'ai rejoins les salles de classe
        virtuelle de l'école{' '}
        <a href="https://oclock.io/" rel="noopener noreferrer">
          o'clock
        </a>
      </p>

      <p>
        Mon sens de la rigueur et ma forte envie d'apprendre m'ont permis de faire en sorte de
        toujours réussir les défis proposés et de mener à bien les projets qui m'ont été confiés.
      </p>

      <p
        onMouseEnter={() => setState({ ...state, isCtaHovered: true })}
        onAnimationEnd={() => setState({ ...state, isCtaHovered: false })}
        className={[classNames?.cta, state.isCtaHovered ? styles.Cta : ''].join(' ')}>
        <Link to="/contact">me contacter</Link>
      </p>
    </div>
  );
};

export default Presentation;
