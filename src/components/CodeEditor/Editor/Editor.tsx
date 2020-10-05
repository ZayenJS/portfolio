import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';
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
      content = <IndexHTML />;
      break;
    default:
      content = null;
      break;
  }

  return <section className={styles.Editor}>{content}</section>;
};

export default Editor;
