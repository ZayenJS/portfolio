import { CSSProperties, FC, Key } from 'react';
import { Link } from 'react-router-dom';

import classes from './CarouselImage.module.scss';

export interface CarouselImageProps {
  id: Key;
  className?: string;
  activeClass?: string;
  textContainerClass?: string;
  tag?: keyof JSX.IntrinsicElements;
  href?: string;
  src: string;
  style?: CSSProperties;
}

const CarouselImage: FC<CarouselImageProps> = ({
  id,
  textContainerClass,
  activeClass,
  className,
  children,
  tag = 'figure',
  href,
  src,
  style,
}) => {
  if (href && tag === 'a') {
    return (
      <Link to={href} className={className ?? ''}>
        <div
          className={`${classes.Text_Container} ${activeClass ?? ''} ${textContainerClass ?? ''} `}>
          {children}
        </div>
      </Link>
    );
  }

  const Tag = tag;

  return (
    // @ts-ignore
    <Tag
      style={{
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `url(${src})`,
        ...style,
      }}
      key={id}
      className={className ?? ''}>
      <div
        className={`${classes.Text_Container} ${activeClass ?? ''} ${textContainerClass ?? ''} `}>
        {children}
      </div>
    </Tag>
  );
};

export default CarouselImage;
