import React, { FC } from 'react';

import warning from '../../assets/images/warning-icon.jpg';

import styles from './WindowsModal.module.scss';

interface WindowsModalProps {
  headerText: string;
  mainMessage: string;
  cancelButtonText: string;
  confirmButtonText: string;
  onCancel: () => void;
  onConfirm: () => void;
}

const WindowsModal: FC<WindowsModalProps> = ({
  headerText,
  mainMessage,
  cancelButtonText,
  confirmButtonText,
  onCancel,
  onConfirm,
}) => {
  return (
    <>
      <div className={styles.WindowsBackdrop}></div>
      <div className={styles.WindowsModal}>
        <header className={styles.WindowsModal__Header}>
          <span className={styles.WindowsModal__Header__Text}>{headerText}</span>
          <span className={styles.WindowsModal__Header__Close} onClick={onCancel}></span>
        </header>
        <main className={styles.WindowsModal__Main}>
          <div className={styles.WindowsModal__Main__Caution}>
            <img src={warning} alt="warning" />
          </div>
          <div className={styles.WindowsModal__Main__Content}>
            <span className={styles.WindowsModal__Main__Content__Message}>{mainMessage}</span>
            <div className={styles.WindowsModal__Main__Content__ButtonsContainer}>
              <button tabIndex={1} onClick={onConfirm}>
                {confirmButtonText}
              </button>
              <button tabIndex={1} onClick={onCancel}>
                {cancelButtonText}
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default WindowsModal;
