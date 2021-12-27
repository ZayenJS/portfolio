import React, { FC, useState } from 'react';
import styles from './TerminalWelcome.module.scss';

interface TerminalWelcomeProps {
  disableButton: boolean;
  onContinue: () => void;
}

const TerminalWelcome: FC<TerminalWelcomeProps> = ({ onContinue }) => {
  const [isVisible, setIsVisible] = useState(true);

  const clickHandler = () => {
    onContinue();
    setIsVisible(false);
  };

  /*
   *     __  __________    __    ____     _       ______  ____  __    ____     __
   *    / / / / ____/ /   / /   / __ \   | |     / / __ \/ __ \/ /   / __ \   / /
   *   / /_/ / __/ / /   / /   / / / /   | | /| / / / / / /_/ / /   / / / /  / /
   *  / __  / /___/ /___/ /___/ /_/ /    | |/ |/ / /_/ / _, _/ /___/ /_/ /  /_/
   * /_/ /_/_____/_____/_____/\____/     |__/|__/\____/_/ |_/_____/_____/  (_)
   *
   */

  const ASCIIHello = [
    '<pre>     __  __________    __    ____     _       ______  ____  __    ____     __',
    '    / / / / ____/ /   / /   / __ \\   | |     / / __ \\/ __ \\/ /   / __ \\   / /',
    '   / /_/ / __/ / /   / /   / / / /   | | /| / / / / / /_/ / /   / / / /  / /',
    '  / __  / /___/ /___/ /___/ /_/ /    | |/ |/ / /_/ / _, _/ /___/ /_/ /  /_/',
    ' /_/ /_/_____/_____/_____/\\____/     |__/|__/\\____/_/ |_/_____/_____/  (_)',
    '</pre>',
  ].join('\n');

  const wrappedASCII = { __html: ASCIIHello };

  return (
    <div className={styles.TerminalWelcome}>
      <header>
        <h1 dangerouslySetInnerHTML={wrappedASCII} />
      </header>
      <main>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure aliquam doloribus commodi
          alias magni, culpa nemo similique officiis facere fuga quos molestias voluptates dicta.
          Perferendis perspiciatis iure nihil rem veniam. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Assumenda aperiam dolor qui, neque architecto blanditiis pariatur quo
          reprehenderit quaerat eligendi aliquam fugit, sint similique nemo tempore velit libero.
        </p>
      </main>

      {isVisible ? (
        <footer>
          <button onClick={clickHandler} type="button">
            Continuer
          </button>
        </footer>
      ) : null}
    </div>
  );
};

export default TerminalWelcome;
