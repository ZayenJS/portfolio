import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimationStyle } from '../../models';

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
        en Janvier 2020 une reconversion dans ce qui me plait depuis toujours : le Web.
      </p>
      <p>
        J'ai d'abord commencé par me former en autodidacte puis j'ai rejoins les salles de classe
        virtuelle de l'école{' '}
        <a
          className={styles.Oclock}
          href="https://oclock.io/"
          target="_blank"
          rel="noopener noreferrer">
          <div>
            <img src={require('../../assets/images/o-clock-full-cream.svg')} alt="logo O'Clock" />
          </div>
        </a>
        .
      </p>

      <div>
        <p>
          Mon sens de la rigueur et ma forte envie d'apprendre m'ont permis de faire en sorte de
          toujours réussir les défis proposés et de mener à bien les projets qui m'ont été confiés.
        </p>
        <Link
          onMouseEnter={() => setState({ ...state, isCtaHovered: true })}
          onAnimationEnd={() => setState({ ...state, isCtaHovered: false })}
          className={[classNames?.cta, state.isCtaHovered ? styles.Cta : ''].join(' ')}
          to="/contact">
          me contacter
        </Link>
      </div>
    </div>
  );
};

export default Presentation;
