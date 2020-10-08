import React, { FC } from 'react';
import Typed from 'react-typed';

import Path from '../Path/Path';

import styles from './TerminalLine.module.scss';

interface TerminalLineProps {
  owner: string;
  path: string;
  machineName: string;
  date: string;
  typedStrings: string[];
  typeSpeed: number;
  startDelay?: number;
  onStringTyped: () => void;
  onStringTypedDelay: number;
}

const TerminalLine: FC<TerminalLineProps> = ({
  owner,
  path,
  machineName,
  date,
  typedStrings,
  typeSpeed,
  startDelay = 0,
  onStringTyped,
  onStringTypedDelay,
}) => {
  return (
    <div className={styles.TerminalLine}>
      <Path owner={owner} path={path} machineName={machineName} date={date} />
      <Typed
        style={{ paddingLeft: '2.5rem' }}
        strings={typedStrings}
        typeSpeed={typeSpeed}
        cursorChar={'_'}
        startDelay={startDelay}
        onStringTyped={(_: any, typedElem: any) =>
          setTimeout(() => {
            typedElem.cursor.remove();
            onStringTyped();
          }, onStringTypedDelay)
        }
      />
    </div>
  );
};

export default TerminalLine;
