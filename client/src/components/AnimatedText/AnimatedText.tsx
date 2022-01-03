import React, { FC, useEffect, useState } from 'react';

import { AnimationStyle } from '../../models';

import classes from './AnimatedText.module.scss';

interface AnimatedTextProps {
  text: string;
  animationName: AnimationStyle;
  className?: string;
  delay?: number;
  appearingAnimation?: AnimationStyle;
}

const AnimatedText: FC<AnimatedTextProps> = ({
  text,
  animationName,
  className,
  delay,
  appearingAnimation,
}) => {
  const [state, setState] = useState({ isHovered: false, hasAppeared: false });

  useEffect(() => {
    if (!state.hasAppeared && !appearingAnimation) {
      setState((prevState) => ({ ...prevState, hasAppeared: true }));
    }
  }, [appearingAnimation, state.hasAppeared]);

  let animationClassName = '';

  switch (animationName) {
    case 'rubber-band':
      animationClassName += 'RubberBand';
      break;
    case 'shadow-drop-center':
      animationClassName += 'ShadowDropCenter';
      break;
    case 'wave':
      animationClassName += 'Wave';
      break;
    case 'wave-appear':
      animationClassName += 'WaveAppear';
      break;
    case 'bounce-in':
      animationClassName += 'BounceIn';
      break;
    case 'bounce-in-left':
      animationClassName += 'BounceInLeft';
      break;
    case 'bounce-in-top':
      animationClassName += 'BounceInTop';
      break;
    case 'bounce-in-forward':
      animationClassName += 'BounceInForward';
      break;
    case 'bounce-in-appear':
      animationClassName += 'BounceInAppear';
      break;
    case 'roll-in-left':
      animationClassName += 'RollInLeft';
      break;
    case 'fade-in-forward':
      animationClassName += 'FadeInForward';
      break;
    case 'puff-in-vertical':
      animationClassName += 'PuffInVertical';
      break;
    case 'puff-in-horizontal':
      animationClassName += 'PuffInHorizontal';
      break;
    case 'newspaper':
      animationClassName += 'Newspaper';
      break;
    case 'focus-in-contract':
      animationClassName += 'FocusInContract';
      break;
    case 'slit-in':
      animationClassName += 'SlitIn';
      break;
    case 'spin-one-turn':
      animationClassName += 'SpinOneTurn';
      break;
    case 'spin-two-turns':
      animationClassName += 'SpinTwoTurns';
      break;
    case 'pulsate':
      animationClassName += 'Pulsate';
      break;
    case 'scale-up-center':
      animationClassName += 'ScaleUpCenter';
      break;
    default:
      break;
  }

  let cssClass = classes.AnimatedText;

  if (className) {
    cssClass += ` ${className}`;
  }

  if (state.isHovered) {
    cssClass += ` ${classes[animationClassName]}`;
  }

  const capitalize = (str: string) => str[0].toUpperCase() + str.slice(1);

  if (!state.hasAppeared && appearingAnimation) {
    const appearingAnimationClass =
      classes[
        appearingAnimation
          .split('-')
          .map((el) => capitalize(el))
          .join('')
      ];
    cssClass = `${classes.AnimatedText} ${appearingAnimationClass}`;
  }

  return (
    <span
      className={cssClass.trim()}
      style={{ animationDelay: !state.hasAppeared ? `${delay}ms` : '0ms' }}
      onMouseEnter={() => setState({ ...state, isHovered: true })}
      onAnimationEnd={() => setState({ ...state, isHovered: false, hasAppeared: true })}>
      {text}
    </span>
  );
};

export default AnimatedText;
