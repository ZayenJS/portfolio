import React, { FC, useEffect, useRef, useState } from 'react';
import dayjs from 'dayjs';

import TerminalHeader from './TerminalHeader/TerminalHeader';

import styles from './Terminal.module.scss';
import { useHistory } from 'react-router-dom';
import { getRandomInt } from '../../utils';
import TerminalLine from './TerminalLine/TerminalLine';

interface TerminalProps {
  chooseMode: (shouldKeepDevMode: boolean) => void;
}

interface Line {
  typed: boolean;
  answered: boolean;
  date: string;
  path: string;
}

interface State {
  user: {
    hasRead: boolean;
    hasChosen: boolean;
    choice?: 'dev' | 'basic';
  };
  initialDate: string;
  firstLine: Line;
  secondLine: Line;
  thirdLine: Line;
}

const Terminal: FC<TerminalProps> = ({ chooseMode }) => {
  const date = `${dayjs().format('YY-MM-DD')} - ${dayjs().format('HH:MM:ss')} `;

  const [state, setState] = useState<State>({
    user: {
      hasRead: false,
      hasChosen: false,
      choice: undefined,
    },
    initialDate: date,
    firstLine: { typed: false, answered: false, date, path: '' },
    secondLine: { typed: false, answered: false, date, path: '' },
    thirdLine: { typed: false, answered: false, date, path: '' },
  });

  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    buttonRef.current?.focus();
  });

  const history = useHistory();

  const hasUserReadHandler = (e: React.FormEvent) => {
    e.preventDefault();
    setState({
      ...state,
      user: { ...state.user, hasRead: true },
      firstLine: { ...state.firstLine, date, path: '~/Documents' },
    });
  };

  const userAnswerHandler = (choice: 'dev' | 'basic') => {
    setState({
      ...state,
      user: { ...state.user, hasChosen: true, choice },
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
        date,
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
        path={state.firstLine.path}
        machineName="David-Pc"
        date={state.secondLine.date}
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
          <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem fugiat ea veniam harum
            asperiores dolorem. Inventore enim dolores fugit nesciunt aliquam. Facilis, assumenda
            qui repellendus cum officia corporis esse commodi. Voluptatem dignissimos enim harum
            dolorum porro error quis, accusantium officia quisquam voluptate impedit? Mollitia quasi
            rerum esse maxime eum, in reiciendis, dignissimos ratione aperiam neque eveniet
            necessitatibus, veniam nulla natus! Debitis, quisquam, corporis nihil at enim, a
            assumenda hic suscipit laudantium deserunt doloremque repudiandae odit dolorem! Saepe
            tenetur aperiam quas quam facilis veniam reprehenderit et cum minima, sunt enim sed?
            Totam ipsum molestias velit vel laudantium ipsam labore explicabo voluptatibus tempore
            necessitatibus vero asperiores natus, tenetur enim aspernatur, beatae debitis corrupti
            illo, distinctio inventore cupiditate. Quae dolores mollitia at officiis? Porro nulla
            provident, autem illo earum quam quisquam vel vero ipsum suscipit nobis consequuntur
            commodi fugiat! Omnis in, nostrum eos iusto ipsum ad dolorum, quas facere unde earum
            officia minus. Corporis nulla, error, ea dolore accusamus voluptatum eaque officiis
            architecto amet soluta officia in id quibusdam voluptates modi distinctio illum eius
            placeat? Nam magnam nesciunt molestiae eveniet enim possimus voluptates. Perferendis,
            soluta? Dignissimos, pariatur dolorum quae nihil harum voluptatem iure repellat magni
            corporis expedita molestias. Ipsam voluptates ad quae sunt ipsum possimus quaerat in
            quo. Deleniti itaque suscipit nesciunt ab. Totam quasi debitis, architecto sunt
            similique alias, inventore quibusdam dicta, voluptatum rem et magni ipsa? Ad
            consectetur, quos asperiores blanditiis maiores, id nostrum sunt corporis velit
            consequatur, necessitatibus sequi natus! Aspernatur, debitis natus. Ab ullam ex
            voluptatem ratione culpa atque placeat amet laudantium deleniti. Unde ducimus doloremque
            reprehenderit ut magni voluptates debitis provident vero dolor non, sapiente dolore
            delectus! Voluptate. Recusandae sed sequi dolores harum quod pariatur accusamus
            voluptate eius fuga, quae, porro eum excepturi, ipsa reprehenderit! Quasi error
            excepturi, animi culpa quisquam cumque, deleniti eligendi voluptatem veniam sed
            architecto.
            <button style={{ width: 'fit-content' }} onClick={hasUserReadHandler} type="button">
              Continuer
            </button>
          </div>
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
