import React, { FC } from 'react';
import styles from './TerminalWelcome.module.scss';

interface TerminalWelcomeProps {
  disableButton: boolean;
  onContinue: () => void;
}

const TerminalWelcome: FC<TerminalWelcomeProps> = ({ disableButton, onContinue }) => {
  return (
    <div className={styles.TerminalWelcome}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem fugiat ea veniam harum
      asperiores dolorem. Inventore enim dolores fugit nesciunt aliquam. Facilis, assumenda qui
      repellendus cum officia corporis esse commodi. Voluptatem dignissimos enim harum dolorum porro
      error quis, accusantium officia quisquam voluptate impedit? Mollitia quasi rerum esse maxime
      eum, in reiciendis, dignissimos ratione aperiam neque eveniet necessitatibus, veniam nulla
      natus! Debitis, quisquam, corporis nihil at enim, a assumenda hic suscipit laudantium deserunt
      doloremque repudiandae odit dolorem! Saepe tenetur aperiam quas quam facilis veniam
      reprehenderit et cum minima, sunt enim sed? Totam ipsum molestias velit vel laudantium ipsam
      labore explicabo voluptatibus tempore necessitatibus vero asperiores natus, tenetur enim
      aspernatur, beatae debitis corrupti illo, distinctio inventore cupiditate. Quae dolores
      mollitia at officiis? Porro nulla provident, autem illo earum quam quisquam vel vero ipsum
      suscipit nobis consequuntur commodi fugiat! Omnis in, nostrum eos iusto ipsum ad dolorum, quas
      facere unde earum officia minus. Corporis nulla, error, ea dolore accusamus voluptatum eaque
      officiis architecto amet soluta officia in id quibusdam voluptates modi distinctio illum eius
      placeat? Nam magnam nesciunt molestiae eveniet enim possimus voluptates. Perferendis, soluta?
      Dignissimos, pariatur dolorum quae nihil harum voluptatem iure repellat magni corporis
      expedita molestias. Ipsam voluptates ad quae sunt ipsum possimus quaerat in quo. Deleniti
      itaque suscipit nesciunt ab. Totam quasi debitis, architecto sunt similique alias, inventore
      quibusdam dicta, voluptatum rem et magni ipsa? Ad consectetur, quos asperiores blanditiis
      maiores, id nostrum sunt corporis velit consequatur, necessitatibus sequi natus! Aspernatur,
      debitis natus. Ab ullam ex voluptatem ratione culpa atque placeat amet laudantium deleniti.
      Unde ducimus doloremque reprehenderit ut magni voluptates debitis provident vero dolor non,
      sapiente dolore delectus! Voluptate. Recusandae sed sequi dolores harum quod pariatur
      accusamus voluptate eius fuga, quae, porro eum excepturi, ipsa reprehenderit! Quasi error
      excepturi, animi culpa quisquam cumque, deleniti eligendi voluptatem veniam sed architecto.
      <button
        disabled={disableButton}
        style={{ width: 'fit-content' }}
        onClick={onContinue}
        type="button">
        Continuer
      </button>
    </div>
  );
};

export default TerminalWelcome;
