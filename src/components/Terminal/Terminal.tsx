import React, { FC, useEffect, useRef, useState } from 'react';
import dayjs from 'dayjs';

import TerminalHeader from './TerminalHeader/TerminalHeader';
import TerminalLine from './TerminalLine/TerminalLine';
import TerminalWelcome from './TerminalWelcome/TerminalWelcome';

import { getRandomInt } from '../../utils';
import { ITerminalState } from '../../models';

import styles from './Terminal.module.scss';

interface TerminalProps {
  shouldActivateDevMode: (activate: boolean) => void;
}

const Terminal: FC<TerminalProps> = ({ shouldActivateDevMode }) => {
  const [state, setState] = useState<ITerminalState>({
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
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    buttonRef.current?.focus();
    if (state.user.hasRead) {
      const container = terminalRef.current;
      if (container) {
        container.scrollTop = container?.scrollHeight;
      }
    }
  });

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

  const userAnswerHandler = (choice: 'dev' | 'normal') => {
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
        typeSpeed={getRandomInt(100, 120)}
        onStringTyped={() => updateState('firstLine', 'secondLine')}
        onStringTypedDelay={getRandomInt(200, 500)}
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
        typeSpeed={getRandomInt(55, 85)}
        startDelay={getRandomInt(50, 150)}
        onStringTyped={() => updateState('secondLine', 'thirdLine')}
        onStringTypedDelay={getRandomInt(200, 400)}
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
          typeSpeed={getRandomInt(80, 120)}
          startDelay={getRandomInt(400, 800)}
          onStringTyped={() => {
            updateState('thirdLine', 'thirdLine');
            shouldActivateDevMode(true);
            // history.push('/code/readme.md');
          }}
          onStringTypedDelay={getRandomInt(1000, 1500)}
        />
      );
    }
  } else if (state.user.hasChosen && state.user.choice === 'normal') {
    secondLine = (
      <TerminalLine
        owner="david"
        path="~/Documents"
        machineName="David-Pc"
        date={state.secondLine.date}
        typedStrings={['cd ./normal']}
        typeSpeed={getRandomInt(70, 90)}
        startDelay={getRandomInt(50, 200)}
        onStringTyped={() => updateState('secondLine', 'thirdLine')}
        onStringTypedDelay={getRandomInt(150, 400)}
      />
    );

    if (state.secondLine.typed) {
      thirdLine = (
        <TerminalLine
          owner="david"
          path="~/Documents/normal"
          machineName="David-Pc"
          date={state.thirdLine.date}
          typedStrings={['google-chrome normal; exit;']}
          typeSpeed={getRandomInt(60, 100)}
          startDelay={getRandomInt(300, 700)}
          onStringTyped={() => {
            updateState('thirdLine', 'thirdLine');
            shouldActivateDevMode(false);
            // history.push('/');
          }}
          onStringTypedDelay={getRandomInt(500, 1000)}
        />
      );
    }
  }

  return (
    <div ref={terminalRef} className={styles.Terminal}>
      <TerminalHeader shouldActivateDevMode={() => shouldActivateDevMode(true)} />
      <div className={styles.Terminal__Content}>
        <TerminalWelcome disableButton={state.firstLine.typed} onContinue={hasUserReadHandler} />
        <main className={styles.Terminal__Main}>
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
                onClick={() => userAnswerHandler('normal')}>
                normal
              </button>
            </div>
          ) : null}
          {secondLine}
          {thirdLine}
        </main>
      </div>
    </div>
  );
};

export default Terminal;
