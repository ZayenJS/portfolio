import React, { FC, useState } from 'react';
import dayjs from 'dayjs';
import Typed from 'react-typed';

import TerminalHeader from './TerminalHeader/TerminalHeader';

import styles from './Terminal.module.scss';
import Path from './Path/Path';
import { useHistory } from 'react-router-dom';
import { getRandomInt } from '../../utils';

interface TerminalProps {
  chooseMode: (shouldKeepDevMode: boolean) => void;
}

const Terminal: FC<TerminalProps> = ({ chooseMode }) => {
  const date = `${dayjs().format('YY-MM-DD')} - ${dayjs().format('HH:MM:ss')} `;

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
          style={{ paddingLeft: '1rem' }}
          strings={['cd ~/Documents/dev/projects/Portfolio']}
          typeSpeed={getRandomInt(100, 150)}
          cursorChar={'_'}
          onStringTyped={(_: any, typedElem: any) =>
            setTimeout(() => {
              typedElem.cursor.remove();
              setState({
                ...state,
                first: { ...state.first, typed: true },
                second: {
                  ...state.second,
                  date,
                },
              });
            }, getRandomInt(500, 800))
          }
        />
      </div>
    );
  }
  if (state.first.typed) {
    second = (
      <div>
        <Path
          owner="david"
          path="~/Documents/dev/projects/Portfolio"
          machineName="David-Pc"
          date={state.second.date}
        />
        <Typed
          style={{ paddingLeft: '1rem' }}
          strings={['ls']}
          typeSpeed={getRandomInt(120, 200)}
          cursorChar={'_'}
          startDelay={getRandomInt(1000, 1700)}
          onStringTyped={(_: any, typedElem: any) =>
            setTimeout(() => {
              typedElem.cursor.remove();
              setState({
                ...state,
                second: { ...state.second, typed: true },
                third: {
                  ...state.third,
                  date,
                },
              });
            }, getRandomInt(700, 900))
          }
        />
      </div>
    );
  }
  if (state.second.typed) {
    third = (
      <div>
        <Path
          owner="david"
          path="~/Documents/dev/projects/Portfolio"
          machineName="David-Pc"
          date={state.third.date}
        />
        <Typed
          style={{ paddingLeft: '1rem' }}
          strings={state.answer.choice === 'dev' ? ['code .; exit '] : ['cd basic; exit']}
          typeSpeed={getRandomInt(150, 215)}
          cursorChar={'_'}
          startDelay={getRandomInt(800, 1100)}
          onStringTyped={(_: any, typedElem: any) =>
            setTimeout(() => {
              typedElem.cursor.remove();
              setState({
                ...state,
                third: { ...state.third, typed: true },
              });
              chooseMode(state.answer.choice === 'dev' ? true : false);
              history.push(state.answer.choice === 'dev' ? '/code' : '/');
            }, getRandomInt(1250, 2000))
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
            <div style={{ paddingLeft: '1rem' }}>
              blabal basic ou dev ?
              <input type="text" />
            </div>
          </form>
          {first} {second} {third}
        </div>
      </main>
    </div>
  );
};

export default Terminal;
