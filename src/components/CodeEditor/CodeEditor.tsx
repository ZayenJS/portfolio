import React, { FC } from 'react';
import ActivityBar from './ActivityBar/ActivityBar';

import styles from './CodeEditor.module.scss';
import Editor from './Editor/Editor';
import SideBar from './SideBar/SideBar';
import TitleBar from './TitleBar/TitleBar';

interface CodeEditorProps {}

const CodeEditor: FC<CodeEditorProps> = () => {
  return (
    <div className={styles.CodeEditor}>
      <div className={styles.CodeEditor__Content}>
        <TitleBar />
        <main className={styles.CodeEditor__Main}>
          <ActivityBar />
          <SideBar />
          <Editor />
        </main>
        <footer className={styles.CodeEditor__Footer}></footer>
      </div>
    </div>
  );
};

export default CodeEditor;
