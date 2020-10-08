import React, { FC, useEffect, useRef, useState } from 'react';
import dayjs from 'dayjs';

import TerminalHeader from './TerminalHeader/TerminalHeader';

import styles from './Terminal.module.scss';
import { useHistory } from 'react-router-dom';
import { getRandomInt } from '../../utils';
import TerminalLine from './TerminalLine/TerminalLine';
import TerminalWelcome from './TerminalWelcome/TerminalWelcome';

interface TerminalProps {
  chooseMode: (shouldKeepDevMode: boolean) => void;
}

interface Line {
  typed: boolean;
  answered: boolean;
  date: string;
}

interface State {
  user: {
    hasRead: boolean;
    hasChosen: boolean;
    choice?: 'dev' | 'basic';
  };
  firstLine: Line;
  secondLine: Line;
  thirdLine: Line;
}

const Terminal: FC<TerminalProps> = ({ chooseMode }) => {
  const [state, setState] = useState<State>({
    user: {
      hasRead: false,
      hasChosen: false,
      choice: undefined,
    },
    firstLine: { typed: false, answered: false, date: '' },
    secondLine: { typed: false, answered: false, date: '' },
    thirdLine: { typed: false, answered: false, date: '' },
  });

  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    buttonRef.current?.focus();
  });

  const history = useHistory();

  const hasUserReadHandler = () => {
    setState({
      ...state,
      user: { ...state.user, hasRead: true },
      firstLine: {
        ...state.firstLine,
        date: `${dayjs().format('YY-MM-DD')} - ${dayjs().format('HH:mm:ss')} `,
      },
    });
  };

  const userAnswerHandler = (choice: 'dev' | 'basic') => {
    setState({
      ...state,
      user: { ...state.user, hasChosen: true, choice },
      secondLine: {
        ...state.secondLine,
        date: `${dayjs().format('YY-MM-DD')} - ${dayjs().format('HH:mm:ss')} `,
      },
    });
  };

  const updateState = (
    current: 'firstLine' | 'secondLine' | 'thirdLine',
    next: 'firstLine' | 'secondLine' | 'thirdLine',
  ) => {
    setState({
      ...state,
      [current]: { ...state[current], typed: true },
      [next]: {
        ...state[next],
        date: `${dayjs().format('YY-MM-DD')} - ${dayjs().format('HH:mm:ss')} `,
      },
    });
  };

  let firstLine = null,
    secondLine = null,
    thirdLine = null;

  if (state.user.hasRead) {
    firstLine = (
      <TerminalLine
        owner="david"
        path={'~/Documents'}
        machineName="David-Pc"
        date={state.firstLine.date}
        typedStrings={['ls']}
        typeSpeed={getRandomInt(120, 200)}
        onStringTyped={() => updateState('firstLine', 'secondLine')}
        onStringTypedDelay={getRandomInt(400, 700)}
      />
    );
  }

  if (state.user.hasChosen && state.user.choice === 'dev') {
    secondLine = (
      <TerminalLine
        owner="david"
        path="~/Documents"
        machineName="David-Pc"
        date={state.secondLine.date}
        typedStrings={['cd ./dev/projects/Portfolio']}
        typeSpeed={getRandomInt(80, 105)}
        startDelay={getRandomInt(50, 200)}
        onStringTyped={() => updateState('secondLine', 'thirdLine')}
        onStringTypedDelay={getRandomInt(200, 500)}
      />
    );

    if (state.secondLine.typed) {
      thirdLine = (
        <TerminalLine
          owner="david"
          path="~/Documents/dev/projects/Portfolio"
          machineName="David-Pc"
          date={state.thirdLine.date}
          typedStrings={['code README.md ; exit;']}
          typeSpeed={getRandomInt(120, 165)}
          startDelay={getRandomInt(800, 1000)}
          onStringTyped={() => {
            updateState('thirdLine', 'thirdLine');
            chooseMode(true);
            history.push('/code/readme.md');
          }}
          onStringTypedDelay={getRandomInt(1250, 2000)}
        />
      );
    }
  } else if (state.user.hasChosen && state.user.choice === 'basic') {
    secondLine = (
      <TerminalLine
        owner="david"
        path="~/Documents"
        machineName="David-Pc"
        date={state.secondLine.date}
        typedStrings={['cd ./basic']}
        typeSpeed={getRandomInt(100, 110)}
        startDelay={getRandomInt(50, 200)}
        onStringTyped={() => updateState('secondLine', 'thirdLine')}
        onStringTypedDelay={getRandomInt(200, 500)}
      />
    );

    if (state.secondLine.typed) {
      thirdLine = (
        <TerminalLine
          owner="david"
          path="~/Documents/basic"
          machineName="David-Pc"
          date={state.thirdLine.date}
          typedStrings={['chrome basic; exit;']}
          typeSpeed={getRandomInt(120, 150)}
          startDelay={getRandomInt(800, 1000)}
          onStringTyped={() => {
            updateState('thirdLine', 'thirdLine');
            chooseMode(false);
            history.push('/');
          }}
          onStringTypedDelay={getRandomInt(1250, 1700)}
        />
      );
    }
  }

  return (
    <div className={styles.Terminal}>
      <TerminalHeader chooseMode={() => chooseMode(true)} />
      <main className={styles.Terminal__Main}>
        <div>
          <TerminalWelcome disableButton={state.firstLine.typed} onContinue={hasUserReadHandler} />
          {firstLine}
          {state.firstLine.typed ? (
            <div>
              <button
                disabled={state.user.hasChosen}
                className={styles.Terminal__LsResult}
                ref={buttonRef}
                tabIndex={1}
                type="button"
                onClick={() => userAnswerHandler('dev')}>
                dev
              </button>
              <button
                disabled={state.user.hasChosen}
                className={styles.Terminal__LsResult}
                tabIndex={1}
                type="button"
                onClick={() => userAnswerHandler('basic')}>
                basic
              </button>
            </div>
          ) : null}
          {secondLine}
          {thirdLine}
        </div>
      </main>
    </div>
  );
};

export default Terminal;
