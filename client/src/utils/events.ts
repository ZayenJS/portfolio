interface ClickAwayParams {
  id: string;
  setIsSelected: React.Dispatch<React.SetStateAction<boolean>>;
  setIsContextMenuVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const clickAway = (event: MouseEvent, params: ClickAwayParams) => {
  const { id, setIsContextMenuVisible, setIsSelected } = params;
  if (
    (event.target as HTMLElement) !== document.getElementById(id) &&
    (event.target as HTMLElement) !== document.getElementById(`${id}-img`) &&
    (event.target as HTMLElement) !== document.getElementById(`${id}-p`)
  ) {
    if (
      (event.target as HTMLElement).classList.contains('context-menu-item') ||
      (event.target as HTMLElement) === document.getElementById('desktop-icon-context-menu')
    ) {
      setIsSelected(false);
      return;
    }

    setIsSelected(false);
    setIsContextMenuVisible(false);
  }
};
