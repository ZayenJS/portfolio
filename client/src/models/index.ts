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

export enum Technos {
  HTML = 'HTML',
  CSS = 'CSS',
  JAVASCRIPT = 'JavaScript',
  TYPESCRIPT = 'TypeScript',
  REACT = 'React',
  REDUX = 'Redux',
  SASS = 'SASS',
  NODE_JS = 'NodeJS',
  POSTGRESQL = 'Postgresql',
  GRAPHQL = 'Graphql',
  NEST_JS = 'NestJS',
  EXPRESS = 'Express',
  PHP = 'PHP',
  TWIG = 'Twig',
  SYMFONY = 'Symfony',
  MYSQL = 'MySQL',
}

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

export enum AccessoryType {
  HEAD = 'HEAD',
  HAIR = 'HAIR',
  EYE = 'EYE',
  FACIAL_HAIR = 'FACIAL_HAIR',
  MOUTH = 'MOUTH',
  CLOTH = 'CLOTH',
  MISC = 'MISC',
}

export type AccessoryName =
  | 'cap-graduate'
  | 'cap-scumbag'
  | 'melon-hat'
  | 'top-hat'
  | 'viking-helmet'
  | 'xmas-hat'
  | 'blond-hair'
  | 'hair-black'
  | 'hair-chestnut-woman-1'
  | 'hair-chestnut-woman-2'
  | 'hair-purple-woman'
  | 'mask-groucho'
  | 'eyeglasses'
  | 'monocle'
  | 'round-glasses'
  | 'thug-life-glasses'
  | 'beard-black'
  | 'mustache-gentleman'
  | 'xmas-beard'
  | 'black-suit-white-shirt'
  | 'shirt'
  | 'suit'
  | 'blunt-thug-life'
  | 'bow-tie'
  | 'mask'
  | 'rose'
  | 'smoking-cigarette'
  | 'smoking-pipe';

export interface Accessory {
  type: AccessoryType;
  name: AccessoryName;
}

export interface Outfit {
  'gentleman-1': Accessory[];
  'gentleman-2': Accessory[];
  cov19: Accessory[];
  xmas: Accessory[];
  godfather: Accessory[];
  thug: Accessory[];
  pimp: Accessory[];
}

export enum Mode {
  DEV = 'DEV',
  NORMAL = 'NORMAL',
  NONE = 'NONE',
}
