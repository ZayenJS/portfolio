import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export type DesktopIcons = 'Corbeille' | 'Chrome' | 'Visual Studio Code';

export interface IActivityBarItem {
  name: ActivityBarItemName;
  className: string;
  icon?: IconDefinition;
}

export type ActivityBarItemName =
  | 'explorer'
  | 'search'
  | 'gitbranch'
  | 'debug'
  | 'bookmark'
  | 'profile'
  | 'settings'
  | '';
