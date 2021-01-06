export type DesktopIcons = 'Corbeille' | 'Chrome' | 'Visual Studio Code';

export interface IActivityBarItem {
  name: ActivityBarItemName;
  className: string;
}

export type ActivityBarItemName =
  | 'explorer'
  | 'search'
  | 'gitbranch'
  | 'debug'
  | 'extensions'
  | 'profile'
  | 'settings'
  | '';

export type WindowControls = 'minimize' | 'maximize' | 'close';

export interface IProject {
  project: boolean;
  src: boolean;
  public: boolean;
}

interface Line {
  typed: boolean;
  answered: boolean;
  date: string;
}

export interface ITerminalState {
  user: {
    hasRead: boolean;
    hasChosen: boolean;
    choice?: 'dev' | 'normal';
  };
  firstLine: Line;
  secondLine: Line;
  thirdLine: Line;
}

export type ContactMeField = 'name' | 'email' | 'message';
export interface IContactMeFields {
  name: { value: string; hasError: boolean };
  email: { value: string; hasError: boolean };
  message: { value: string; hasError: boolean };
}
export interface IWorkProject {
  name: string;
  description: string;
  image: string;
  gallery?: string[];
  url?: string;
  repository?: string;
  technos: { name: Technos; logo: string }[];
}

export type Technos =
  | 'HTML'
  | 'CSS'
  | 'JavaScript'
  | 'TypeScript'
  | 'React'
  | 'Redux'
  | 'SASS/SCSS'
  | 'NodeJS'
  | 'Postgresql'
  | 'Socket.io';

export type AnimationStyle =
  | 'none'
  | 'rubber-band'
  | 'shadow-drop-center'
  | 'wave'
  | 'wave-appear'
  | 'bounce-in'
  | 'bounce-in-left'
  | 'bounce-in-top'
  | 'bounce-in-forward'
  | 'bounce-in-appear'
  | 'roll-in-left'
  | 'fade-in-forward'
  | 'puff-in-vertical'
  | 'puff-in-horizontal'
  | 'newspaper'
  | 'focus-in-contract'
  | 'slit-in'
  | 'spin-one-turn'
  | 'spin-two-turns'
  | 'pulsate'
  | 'scale-up-center';
