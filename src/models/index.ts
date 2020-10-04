import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export type DesktopIcons = 'Corbeille' | 'Chrome' | 'Visual Studio Code';

export interface IActivityBarItem {
  name: string;
  className: string;
  icon?: IconDefinition;
}
