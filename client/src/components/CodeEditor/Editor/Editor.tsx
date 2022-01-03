import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Line from '../Line/Line';
import ContactMe from '../Pages/ContactMe/ContactMe';
import IndexHTML from '../Pages/IndexHTML/IndexHTML';
import Readme from '../Pages/Readme/Readme';

import classes from './Editor.module.scss';

interface EditorProps extends RouteComponentProps {}

const Editor: FC<EditorProps> = ({ match }) => {
  let content;
  switch (match.path) {
    case '/code/readme.md':
      content = <Readme />;
      break;
    case '/code/contactme.tsx':
      content = <ContactMe />;
      break;
    case '/code/index.html':
      content = (
        <div className={classes.IndexHTML}>
          <div className={classes.IndexHTML__Lines}>
            <Line nbOfLines={35} className={classes.IndexHTML__Line} />
          </div>
          <IndexHTML />;
        </div>
      );
      break;
    default:
      content = null;
      break;
  }

  return <section className={classes.Editor}>{content}</section>;
};

export default Editor;
