import { FC, MouseEvent } from 'react';
import { useLocation } from 'react-router-dom';
import html2canvas from 'html2canvas';
import { Icon } from '@iconify/react';
import archlinuxIcon from '@iconify/icons-logos/archlinux';
import bxPowerOff from '@iconify/icons-bx/bx-power-off';
import fileTypeVscode from '@iconify/icons-vscode-icons/file-type-vscode';
import colorPicker from '@iconify/icons-gg/color-picker';
import brightnessHigh32Filled from '@iconify/icons-fluent/brightness-high-32-filled';

import classes from './DesktopMenuBar.module.scss';
import { useCurrentTime } from '../../../hooks/useCurrentTime';
import { ColorPicker } from '../../../utils/ColorPicker';

export interface DesktopMenuBarProps {}

const DesktopMenuBar: FC<DesktopMenuBarProps> = () => {
  const location = useLocation();
  const { formattedCurrentTime } = useCurrentTime();

  let currentApp = null;

  if (location.pathname.includes('code')) {
    currentApp = (
      <span className={classes.Current_App}>
        <Icon icon={fileTypeVscode} width={20} />
        Visual Studio Code
      </span>
    );
  }

  const onColorPickerClick = async (event: MouseEvent) => {
    event.nativeEvent.stopPropagation();
    const canvas = await html2canvas(document.getElementById('root')!);

    const colorPicker = new ColorPicker(canvas, event.pageX, event.pageY, true);

    document.addEventListener('mousemove', colorPicker.move);
    document.addEventListener('click', colorPicker.pick, { once: true });
  };

  return (
    <div className={classes.Container}>
      <div className={classes.Left}>
        <Icon className={classes.Icon} icon={archlinuxIcon} width={20} />
        <span>Applications</span>
        {currentApp}
      </div>
      <time>{formattedCurrentTime}</time>
      <div className={classes.Right}>
        <Icon
          onClick={onColorPickerClick}
          className={classes.Icon}
          icon={colorPicker}
          color="white"
        />
        <div className={classes.Icon_Container}>
          <Icon
            className={classes.Icon}
            icon={brightnessHigh32Filled}
            width={25}
            style={{ width: 'auto' }}
            color="white"
            hFlip={true}
          />
          <Icon className={classes.Icon} style={{ width: 'auto' }} icon={bxPowerOff} width={25} />
        </div>
      </div>
    </div>
  );
};

export default DesktopMenuBar;
