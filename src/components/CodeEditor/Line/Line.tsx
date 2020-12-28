import React, { FC } from 'react';

interface LineProps {
  nbOfLines: number;
  className: string;
}

const Line: FC<LineProps> = ({ nbOfLines, className }) => {
  const lines = [];

  for (let i = 0; i < nbOfLines; i++) {
    lines.push(
      <span key={i} className={className}>
        {i + 1}
      </span>,
    );
  }

  return <>{lines}</>;
};

export default Line;
