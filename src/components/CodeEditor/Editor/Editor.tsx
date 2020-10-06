import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Line from '../Line/Line';
import HireMe from '../Pages/HireMe/HireMe';
import IndexHTML from '../Pages/IndexHTML/IndexHTML';
import Readme from '../Pages/Readme/Readme';

import styles from './Editor.module.scss';

interface EditorProps extends RouteComponentProps {}

const Editor: FC<EditorProps> = ({ match }) => {
  let content;
  switch (match.path) {
    case '/code/readme.md':
      content = <Readme />;
      break;
    case '/code/hireme.tsx':
      content = <HireMe />;
      break;
    case '/code/index.html':
      content = (
        <div className={styles.IndexHTML}>
          <div className={styles.IndexHTML__Lines}>
            <Line nbOfLines={35} className={styles.IndexHTML__Line} />
          </div>
          <IndexHTML />;
        </div>
      );
      break;
    default:
      content = null;
      break;
  }

  return <section className={styles.Editor}>{content}</section>;
};

export default Editor;
