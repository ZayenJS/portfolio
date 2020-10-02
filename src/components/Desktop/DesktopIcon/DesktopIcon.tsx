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

  const onSelectIcon = () => {
    setIsSelected(true);
    setIsContextMenuVisible(false);
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

  let onContextMenu;
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
      onContextMenu = showRecycleBinContextMenu;
      break;
    case 'Chrome':
      onContextMenu = undefined;
      break;
    case 'Visual Studio Code':
      onContextMenu = undefined;
      break;
    default:
      onContextMenu = undefined;
  }

  return (
    <div
      id={id}
      onClick={onSelectIcon}
      onDoubleClick={onDoubleClick}
      onContextMenu={onContextMenu}
      className={
        isSelected
          ? [styles.DesktopIcon__Container, styles.DesktopIcon__Container__Selected].join(' ')
          : styles.DesktopIcon__Container
      }>
      <img
        onContextMenu={onContextMenu}
        id={`${id}-img`}
        className={styles.DesktopIcon}
        src={src}
        alt={alt}
      />
      <p onContextMenu={onContextMenu} id={`${id}-p`}>
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
