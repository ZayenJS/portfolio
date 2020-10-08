import React, { FC, useState } from 'react';
import styles from './TerminalWelcome.module.scss';

interface TerminalWelcomeProps {
  disableButton: boolean;
  onContinue: () => void;
}

const TerminalWelcome: FC<TerminalWelcomeProps> = ({ disableButton, onContinue }) => {
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
      <main>Bienvenue sur mon portfolio</main>

      {isVisible ? (
        <footer>
          <button style={{ width: 'fit-content' }} onClick={clickHandler} type="button">
            Continuer
          </button>
        </footer>
      ) : null}
    </div>
  );
};

export default TerminalWelcome;
