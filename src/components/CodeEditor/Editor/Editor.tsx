import React, { FC } from 'react';
import styles from './Editor.module.scss';

interface EditorProps {}

const Editor: FC<EditorProps> = () => {
  return <div className={styles.Editor}>Editor Component</div>;
};

export default Editor;
