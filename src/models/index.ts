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
    choice?: 'dev' | 'basic';
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
  url?: string;
  repository?: string;
  technos: { name: string; logo: string }[];
}
