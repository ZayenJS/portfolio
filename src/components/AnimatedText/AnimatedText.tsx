import React, { FC, useEffect, useState } from 'react';
import styles from './AnimatedText.module.scss';

type AnimationStyle =
  | 'none'
  | 'rubber-band'
  | 'shadow-drop-center'
  | 'wave'
  | 'wave-appear'
  | 'bounce-in-left'
  | 'bounce-in-top'
  | 'bounce-in-forward'
  | 'bounce-in'
  | 'roll-in-left'
  | 'fade-in-forward'
  | 'puff-in-vertical'
  | 'puff-in-horizontal'
  | 'newspaper'
  | 'focus-in-contract'
  | 'slit-in'
  | 'spin'
  | 'pulsate';

interface AnimatedTextProps {
  letter: string;
  animationName: AnimationStyle;
  className?: string;
  delay?: number;
  appearingAnimation?: AnimationStyle;
}

const AnimatedText: FC<AnimatedTextProps> = ({
  letter,
  animationName,
  className,
  delay,
  appearingAnimation,
}) => {
  const [state, setState] = useState({ isHovered: false, hasAppeared: false });

  useEffect(() => {}, []);

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
    case 'bounce-in-left':
      animationClassName += 'BounceInLeft';
      break;
    case 'bounce-in-top':
      animationClassName += 'BounceInTop';
      break;
    case 'bounce-in-forward':
      animationClassName += 'BounceInForward';
      break;
    case 'bounce-in':
      animationClassName += 'BounceIn';
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
    case 'spin':
      animationClassName += 'Spin';
      break;
    case 'pulsate':
      animationClassName += 'Pulsate';
      break;
    default:
      break;
  }

  let cssClass = 'AnimatedText';

  if (className) {
    cssClass += ` ${className}`;
  }

  if (state.isHovered) {
    cssClass += ' ' + styles[animationClassName];
  }

  const capitalize = (str: string) => str[0].toUpperCase() + str.slice(1);

  if (!state.hasAppeared) {
    if (appearingAnimation) {
      const appearingAnimationClass =
        styles[
          appearingAnimation
            .split('-')
            .map((el) => capitalize(el))
            .join('')
        ];
      cssClass = `AnimatedText ${appearingAnimationClass}`;
    } else {
      setState({ ...state, hasAppeared: true });
    }
  }

  return (
    <span
      className={cssClass.trim()}
      style={{ animationDelay: !state.hasAppeared ? `${delay}ms` : '0ms' }}
      onMouseEnter={() => setState({ ...state, isHovered: true })}
      onAnimationEnd={() => setState({ ...state, isHovered: false, hasAppeared: true })}>
      {letter}
    </span>
  );
};

export default AnimatedText;
