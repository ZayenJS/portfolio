import { FC, useEffect, useMemo, useRef, useState } from 'react';

import Draggable from 'react-draggable';

import TerminalHeader from './TerminalHeader/TerminalHeader';
import TerminalLine from './TerminalLine/TerminalLine';
import TerminalWelcome from './TerminalWelcome/TerminalWelcome';

import { getRandomInt } from '../../utils';

import styles from './Terminal.module.scss';
import { StringUtil } from '../../utils/StringUtil';
import { useElementClick } from '../../hooks/useElementClick';

interface TerminalProps {
  shouldActivateDevMode: (activate: boolean) => void;
}

interface Line {
  typed: boolean;
  answered: boolean;
}

export interface ITerminalState {
  user: {
    hasRead: boolean;
    hasChosen: boolean;
    choice?: 'dev' | 'normal';
  };
  firstLine: Line;
  secondLine: Line;
  thirdLine: Line;
  defaultPosition?: { x: number; y: number };
}

const Terminal: FC<TerminalProps> = ({ shouldActivateDevMode }) => {
  const [state, setState] = useState<ITerminalState>({
    user: {
      hasRead: false,
      hasChosen: false,
      choice: undefined,
    },
    firstLine: { typed: false, answered: false },
    secondLine: { typed: false, answered: false },
    thirdLine: { typed: false, answered: false },
    defaultPosition: undefined,
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
  }, [state.user.hasRead]);

  const hasUserReadHandler = () => {
    setState({
      ...state,
      user: { ...state.user, hasRead: true },
    });
  };

  const userAnswerHandler = (choice: 'dev' | 'normal') => {
    setState({
      ...state,
      user: { ...state.user, hasChosen: true, choice },
    });
  };

  const updateState = (current: 'firstLine' | 'secondLine' | 'thirdLine') => {
    setState({
      ...state,
      [current]: { ...state[current], typed: true },
    });
  };

  let firstLine = null;
  let secondLine = null;
  let thirdLine = null;

  if (state.user.hasRead) {
    firstLine = (
      <TerminalLine
        owner="david"
        path="~/Documents"
        machineName="the-archlinux"
        typedStrings={['ls']}
        typeSpeed={getRandomInt(100, 120)}
        onStringTyped={() => updateState('firstLine')}
        onStringTypedDelay={getRandomInt(200, 500)}
      />
    );
  }

  if (state.user.hasChosen && state.user.choice === 'dev') {
    secondLine = (
      <TerminalLine
        owner="david"
        path="~/Documents"
        machineName="the-archlinux"
        typedStrings={['cd ./dev/projects/Portfolio']}
        typeSpeed={getRandomInt(55, 85)}
        startDelay={getRandomInt(50, 150)}
        onStringTyped={() => updateState('secondLine')}
        onStringTypedDelay={getRandomInt(200, 400)}
      />
    );

    if (state.secondLine.typed) {
      thirdLine = (
        <TerminalLine
          owner="david"
          path="~/Documents/dev/projects/Portfolio"
          machineName="the-archlinux"
          typedStrings={['code README.md ; exit;']}
          typeSpeed={getRandomInt(80, 120)}
          startDelay={getRandomInt(400, 800)}
          onStringTyped={() => {
            updateState('thirdLine');
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
        machineName="the-archlinux"
        typedStrings={['cd ./normal']}
        typeSpeed={getRandomInt(70, 90)}
        startDelay={getRandomInt(50, 200)}
        onStringTyped={() => updateState('secondLine')}
        onStringTypedDelay={getRandomInt(150, 400)}
      />
    );

    if (state.secondLine.typed) {
      thirdLine = (
        <TerminalLine
          owner="david"
          path="~/Documents/normal"
          machineName="the-archlinux"
          typedStrings={['google-chrome normal; exit;']}
          typeSpeed={getRandomInt(60, 100)}
          startDelay={getRandomInt(300, 700)}
          onStringTyped={() => {
            updateState('thirdLine');
            shouldActivateDevMode(false);
            // history.push('/');
          }}
          onStringTypedDelay={getRandomInt(500, 1000)}
        />
      );
    }
  }

  const id = useMemo(() => `_${StringUtil.makeid(22)}`, []);

  const focused = useElementClick(terminalRef, 'inside', true);

  useEffect(() => {
    const bodyWidth = document.body.getBoundingClientRect().width;
    const bodyHeight = document.body.getBoundingClientRect().height;

    const terminalWidth = 65 * 16;
    const terminalHeight = 50 * 16;

    const x = (bodyWidth - terminalWidth) / 2;
    const y = (bodyHeight - terminalHeight) / 2;

    setState((ps) => ({ ...ps, defaultPosition: { x, y } }));
  }, []);

  return state.defaultPosition ? (
    <Draggable handle={`#${id}`} defaultPosition={state.defaultPosition}>
      <div ref={terminalRef} className={`${styles.Terminal} ${focused ? styles.Focused : ''}`}>
        <TerminalHeader id={id} focused={focused} />
        <div className={styles.Terminal_Content}>
          <TerminalWelcome disableButton={state.firstLine.typed} onContinue={hasUserReadHandler} />
          <main className={styles.Terminal_Main}>
            {firstLine}
            {state.firstLine.typed ? (
              <div>
                <button
                  disabled={state.user.hasChosen}
                  className={styles.Terminal_LsResult}
                  ref={buttonRef}
                  tabIndex={1}
                  type="button"
                  onClick={() => userAnswerHandler('dev')}>
                  dev
                </button>
                <button
                  disabled={state.user.hasChosen}
                  className={styles.Terminal_LsResult}
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
    </Draggable>
  ) : null;
};

export default Terminal;
