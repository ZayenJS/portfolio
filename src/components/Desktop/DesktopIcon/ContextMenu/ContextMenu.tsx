import React, { FC, useState } from 'react';
import WindowsModal from '../../../WindowsModal/WindowsModal';
import styles from './ContextMenu.module.scss';

interface ContextMenuProps {
  menu: { icon?: string; text: string }[];
  isVisible: boolean;
  onItemClick: () => void;
  onDeleteWebsite: (response: 'yes' | 'no') => void;
}

const ContextMenu: FC<ContextMenuProps> = ({ isVisible, menu, onItemClick, onDeleteWebsite }) => {
  const [isDeletionPopupVisible, setIsDeletionPopupVisible] = useState(false);

  const askingDeleteWebsite = () => {
    onItemClick();
    setIsDeletionPopupVisible(true);
  };

  const deleteHandler = (response: 'yes' | 'no') => {
    onDeleteWebsite(response);
    setIsDeletionPopupVisible(false);
  };

  return (
    <>
      {isVisible ? (
        <ul id="desktop-icon-context-menu" className={styles.ContextMenu}>
          {menu.map((item) => (
            <li
              onClick={() => (item.text === 'Supprimer le site' ? askingDeleteWebsite() : '')}
              className="context-menu-item"
              key={item.text}>
              <span className="context-menu-item">{item.icon ? item.icon : null}</span>
              <span className="context-menu-item">{item.text}</span>
            </li>
          ))}
        </ul>
      ) : null}
      {isDeletionPopupVisible ? (
        <WindowsModal
          headerText="Supprimer le site"
          mainMessage="Voulez-vous vraiment supprimer ce site de manière définitive ?"
          cancelButtonText="Non"
          confirmButtonText="Oui"
          onCancel={() => deleteHandler('no')}
          onConfirm={() => deleteHandler('yes')}
        />
      ) : null}
    </>
  );
};

export default ContextMenu;
