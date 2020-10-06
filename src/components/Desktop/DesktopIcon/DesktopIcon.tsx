import React, { FC, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import ContextMenu from './ContextMenu/ContextMenu';

import { DesktopIcons } from '../../../models';
import { clickAway } from '../../../utils';

import recycleBin from '../../../assets/images/recycle-bin.png';

import styles from './DesktopIcon.module.scss';

interface DesktopIconProps {
  id: string;
  label: DesktopIcons;
  src: string;
  alt: string;
  onDoubleClick?: () => void;
}

const DesktopIcon: FC<DesktopIconProps> = ({ id, label, src, alt, onDoubleClick }) => {
  const [isSelected, setIsSelected] = useState(false);
  const history = useHistory();

  const [isContextMenuVisible, setIsContextMenuVisible] = useState(false);

  const showRecycleBinContextMenu = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsContextMenuVisible(true);
    setIsSelected(true);
  };

  const selectIconHandler = (event: React.MouseEvent) => {
    const target = event.target as HTMLImageElement;
    if (window.matchMedia('(max-width: 1200px)').matches) {
      if (target.id === 'vscode-img') {
        history.push('/code/readme.md');
      } else if (target.id === 'google-chrome-img') {
        window.open('https://google.com', '_blank');
      } else if (target.id === 'recycle-bin-img') {
        history.push('/suppression');
      }
    } else {
      setIsSelected(true);
      setIsContextMenuVisible(false);
    }
  };

  const doubleClickHandler = () => {
    if (onDoubleClick) {
      setIsSelected(false);
      onDoubleClick();
    }
  };

  const keyPressHandler = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' && onDoubleClick) {
      doubleClickHandler();
    }
  };

  const deleteWebsiteHandler = (response: 'yes' | 'no') => {
    if (response === 'yes') {
      history.push('/suppression');
      return;
    }
    setIsContextMenuVisible(false);
  };

  useEffect(() => {
    window.addEventListener('click', (event: MouseEvent) =>
      clickAway(event, { id, setIsSelected, setIsContextMenuVisible }),
    );

    return () =>
      window.removeEventListener('click', (event) =>
        clickAway(event, { id, setIsSelected, setIsContextMenuVisible }),
      );
  }, [id]);

  let contextMenuHandler;
  const contextMenuContent: { icon?: any; text: string }[] = [];

  switch (label) {
    case 'Corbeille':
      contextMenuContent.push(
        {
          icon: <img className={styles.DesktopIcon__RecycleBin} src={recycleBin} alt="" />,
          text: 'Supprimer le site',
        },
        { text: 'Propriétés' },
      );
      contextMenuHandler = showRecycleBinContextMenu;
      break;
    case 'Chrome':
      contextMenuHandler = undefined;
      break;
    case 'Visual Studio Code':
      contextMenuHandler = undefined;
      break;
    default:
      contextMenuHandler = undefined;
  }

  return (
    <div
      tabIndex={1}
      id={id}
      onClick={selectIconHandler}
      onDoubleClick={doubleClickHandler}
      onContextMenu={contextMenuHandler}
      onKeyPress={keyPressHandler}
      className={
        isSelected
          ? [styles.DesktopIcon__Container, styles.DesktopIcon__Container__Selected].join(' ')
          : styles.DesktopIcon__Container
      }>
      <img
        onKeyPress={keyPressHandler}
        onContextMenu={contextMenuHandler}
        id={`${id}-img`}
        className={styles.DesktopIcon}
        src={src}
        alt={alt}
      />
      <p onKeyPress={keyPressHandler} onContextMenu={contextMenuHandler} id={`${id}-p`}>
        {label}
      </p>
      <ContextMenu
        isVisible={isContextMenuVisible}
        onDeleteWebsite={deleteWebsiteHandler}
        menu={contextMenuContent}
        onItemClick={() => setIsContextMenuVisible(false)}
      />
    </div>
  );
};

export default DesktopIcon;
