import React, { FC, useState } from 'react';
import dayjs from 'dayjs';
import Typed from 'react-typed';

import TerminalHeader from './TerminalHeader/TerminalHeader';

import styles from './Terminal.module.scss';
import Path from './Path/Path';
import { useHistory } from 'react-router-dom';

interface TerminalProps {
  chooseMode: (shouldKeepDevMode: boolean) => void;
}

const Terminal: FC<TerminalProps> = ({ chooseMode }) => {
  const date = `${dayjs().format('YY-MM-DD')} ${dayjs().format('HH:MM:ss')} `;

  const [state, setState] = useState({
    answer: {
      hasAnswered: false,
      choice: '',
    },
    first: { typed: false, answered: false, date },
    second: { typed: false, answered: false, date },
    third: { typed: false, answered: false, date },
  });

  const history = useHistory();

  const t = (e: React.FormEvent) => {
    e.preventDefault();
    setState({
      ...state,
      answer: { hasAnswered: true, choice: 'dev' },
    });
  };

  let first = null,
    second = null,
    third = null;

  if (state.answer.hasAnswered) {
    first = (
      <div>
        <Path owner="david" path="~" machineName="David-Pc" date={state.first.date} />
        <Typed
          strings={['cd ~/Desktop']}
          typeSpeed={75}
          cursorChar={' '}
          onStringTyped={() =>
            setTimeout(() => {
              setState({
                ...state,
                first: { ...state.first, typed: true },
                second: {
                  ...state.second,
                  date,
                },
              });
            }, 1000)
          }
        />
      </div>
    );
  }
  if (state.first.typed) {
    second = (
      <div>
        <Path owner="david" path="~/Desktop" machineName="David-Pc" date={state.second.date} />
        <Typed
          strings={['ls']}
          typeSpeed={100}
          cursorChar={' '}
          startDelay={750}
          onStringTyped={() =>
            setTimeout(() => {
              setState({
                ...state,
                second: { ...state.second, typed: true },
                third: {
                  ...state.third,
                  date,
                },
              });
            }, 250)
          }
        />
      </div>
    );
  }
  if (state.second.typed) {
    third = (
      <div>
        <Path owner="david" path="~/Desktop" machineName="David-Pc" date={state.third.date} />
        <Typed
          strings={state.answer.choice === 'dev' ? ['code .; exit '] : ['cd basic; exit']}
          typeSpeed={100}
          cursorChar={' '}
          startDelay={750}
          onStringTyped={() =>
            setTimeout(() => {
              setState({
                ...state,
                third: { ...state.third, typed: true },
              });
              chooseMode(state.answer.choice === 'dev' ? true : false);
              history.push(state.answer.choice === 'dev' ? '/code' : '/');
            }, 1000)
          }
        />
      </div>
    );
  }

  return (
    <div className={styles.Terminal}>
      <TerminalHeader chooseMode={() => chooseMode(true)} />
      <main className={styles.Terminal__Main}>
        <div>
          <form onSubmit={t}>
            <Path owner="david" path="~" machineName="David-Pc" date={state.first.date} />
            blabal basic ou dev ?
            <input type="text" />
          </form>
          {first} {second} {third}
        </div>
      </main>
    </div>
  );
};

export default Terminal;
