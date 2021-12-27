import { FC } from 'react';

import classes from './WindowActionButtons.module.scss';

interface WindowActionButtonsProps {
  onMinimize: () => void;
  onMaximize: () => void;
  onClose: () => void;
}

const WindowActionButtons: FC<WindowActionButtonsProps> = ({ onClose, onMaximize, onMinimize }) => {
  return (
    <div className={classes.Container}>
      <button onClick={onMinimize} type="button" className={classes.Action_Button} />
      <button onClick={onMaximize} type="button" className={classes.Action_Button} />
      <button onClick={onClose} type="button" className={classes.Action_Button} />
    </div>
  );
};

export default WindowActionButtons;
