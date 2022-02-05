import { FC, Key, TouchEvent, useCallback, useEffect, useState } from 'react';

import classes from './Carousel.module.scss';

export interface CarouselProps {
  pauseOnHover?: boolean;
  className?: string;
  onElementChange: (id: Key) => void;
  duration?: number;
  autoplay?: boolean;
  slide?: boolean;
  showArrows?: boolean;
  showArrowsOnHover?: boolean;
  showDots?: boolean;
  showDotsOnHover?: boolean;
  swipeable?: boolean;
}

interface CarouselElement {
  id: Key;
  className?: string;
}

interface CarouselState {
  activeId: Key;
  elements: CarouselElement[];
  paused: boolean;
  direction: 'left' | 'right';
  xDown: number | null;
}

const Carousel: FC<CarouselProps> = ({
  pauseOnHover,
  className,
  onElementChange,
  children,
  duration = 5000,
  autoplay = false,
  slide = false,
  showArrows = false,
  showArrowsOnHover = false,
  showDots = false,
  showDotsOnHover = false,
  swipeable = false,
}) => {
  const [state, setState] = useState<CarouselState>({
    direction: 'right',
    paused: false,
    activeId: (children as JSX.Element[])[0].key!,
    elements: (children as JSX.Element[]).map((el, i) => ({
      id: el.key!,
      className: i === 0 ? classes.Active : classes.Leave,
    })),
    xDown: null,
  });

  const nextImage = useCallback(() => {
    const elements: CarouselElement[] = [...state.elements];

    const activeElementIndex = state.elements.findIndex((el) => el.id === state.activeId);

    const currentElement = {
      ...elements[activeElementIndex],
      className: classes.Leave,
    };

    const isLastElement = !elements[activeElementIndex + 1];
    const nextElementIndex = isLastElement ? 0 : activeElementIndex + 1;

    const nextElement = {
      ...elements[nextElementIndex],
      className: classes.Active,
    };

    elements[activeElementIndex] = currentElement;
    elements[nextElementIndex] = nextElement;

    onElementChange(nextElement.id);
    setState((prevState) => ({
      ...prevState,
      direction: 'right',
      elements,
      activeId: nextElement.id,
    }));
  }, [state.activeId, state.elements, onElementChange]);

  const previousImage = () => {
    const elements: CarouselElement[] = [...state.elements];

    const activeElementIndex = state.elements.findIndex((el) => el.id === state.activeId);

    const currentElement = {
      ...elements[activeElementIndex],
      className: classes.Leave,
    };

    const isFirstElement = !elements[activeElementIndex - 1];
    const previousElementIndex = isFirstElement ? elements.length - 1 : activeElementIndex - 1;

    const previousElement = {
      ...elements[previousElementIndex],
      className: classes.Active,
    };

    elements[activeElementIndex] = currentElement;
    elements[previousElementIndex] = previousElement;

    onElementChange(previousElement.id);
    setState((prevState) => ({
      ...prevState,
      direction: 'left',
      elements,
      activeId: previousElement.id,
    }));
  };

  const selectImage = (id: Key) => {
    const elements: CarouselElement[] = [...state.elements];
    const activeElementIndex = state.elements.findIndex((el) => el.id === state.activeId);
    const clickedElementIndex = state.elements.findIndex((el) => el.id === id);

    const direction = clickedElementIndex > activeElementIndex ? 'right' : 'left';

    elements[activeElementIndex] = {
      ...elements[activeElementIndex],
      className: classes.Leave,
    };

    const nextElement = {
      ...elements[clickedElementIndex],
      className: classes.Active,
    };

    elements[clickedElementIndex] = nextElement;

    onElementChange(nextElement.id);
    setState((prevState) => ({ ...prevState, direction, elements, activeId: nextElement.id }));
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(state.paused ? '' : nextImage, duration);

      return () => {
        clearInterval(interval);
      };
    }
  }, [duration, nextImage, autoplay, state.paused]);

  const mouseEnterHandler = () => {
    if (pauseOnHover) {
      setState((prevState) => ({ ...prevState, paused: true }));
    }
  };

  const mouseLeaveHandler = () => {
    if (pauseOnHover) {
      setState((prevState) => ({ ...prevState, paused: false }));
    }
  };

  const touchStartHandler = (event: TouchEvent) => {
    if (!swipeable) return;
    const firstTouch = event.touches[0];
    setState((prevState) => ({ ...prevState, xDown: firstTouch.clientX }));
  };

  const touchMoveHandler = (event: TouchEvent) => {
    if (!state.xDown || !swipeable) {
      return;
    }

    const xUp = event.touches[0].clientX;

    const xDiff = state.xDown - xUp;

    /* reset values */
    setState((prevState) => ({ ...prevState, xDown: null, yDown: null }));

    if (xDiff > 0) {
      /* left swipe */
      return nextImage();
    }

    /* right swipe */
    return previousImage();
  };

  const capitalizedDirection = state.direction[0].toUpperCase() + state.direction.slice(1);

  return (
    <div
      className={`${classes.Container} ${className ?? ''}`}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}>
      <div>
        {state.elements.map((element, i) => (
          <div
            key={element.id}
            className={`${classes.Image} ${slide ? classes.Slide : ''} ${
              classes[capitalizedDirection]
            } ${element.className}`}
            onTouchStart={touchStartHandler}
            onTouchMove={touchMoveHandler}>
            {(children as JSX.Element[])[i]}
          </div>
        ))}
      </div>
      {(showArrows || showArrowsOnHover) && (
        <div className={`${classes.Arrows} ${showArrowsOnHover ? classes.On_Hover : ''}`}>
          <div onClick={previousImage} />
          <div onClick={nextImage} />
        </div>
      )}
      {(showDots || showDotsOnHover) && (
        <div className={`${classes.Dots} ${showDotsOnHover ? classes.On_Hover : ''}`}>
          {state.elements.map((el) => (
            <div
              onClick={selectImage.bind(null, el.id)}
              className={`${classes.Dot} ${el.id === state.activeId ? classes.Active : ''}`}
              key={el.id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
