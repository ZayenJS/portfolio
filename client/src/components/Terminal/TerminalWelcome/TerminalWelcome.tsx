import { FC, useState } from 'react';
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nemo illum quo recusandae
          aspernatur repellat deserunt aperiam ipsum velit, voluptatum voluptatem adipisci
          reprehenderit voluptate officia numquam molestiae quam suscipit quia laudantium! Ipsa amet
          aperiam ipsum nulla, tempore hic laudantium beatae sapiente cumque obcaecati quia,
          consequuntur inventore iste error molestias neque maxime possimus numquam ratione ducimus!
          Sequi beatae consequatur id nihil sint quo modi perferendis veritatis itaque, cum totam
          rerum deleniti deserunt ipsa reiciendis commodi maiores architecto quos? Nesciunt, odio
          iusto.
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
