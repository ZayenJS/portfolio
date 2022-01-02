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

export type Technos =
  | 'HTML'
  | 'CSS'
  | 'JavaScript'
  | 'TypeScript'
  | 'React'
  | 'React Typescript'
  | 'Redux'
  | 'SASS/SCSS'
  | 'NodeJS'
  | 'Postgresql'
  | 'Graphql'
  | 'NestJS'
  | 'Express'
  | 'PHP'
  | 'Twig'
  | 'Symfony'
  | 'MySQL';

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

export type Accessories =
  | 'beard-black'
  | 'black-suit-white-shirt'
  | 'blond-hair'
  | 'blunt-thug-life'
  | 'bow-tie'
  | 'cap-graduate'
  | 'cap-scumbag'
  | 'eyeglasses'
  | 'hair-black'
  | 'hair-chestnut-woman-1'
  | 'hair-chestnut-woman-2'
  | 'hair-purple-woman'
  | 'mask-groucho'
  | 'mask-guy-fawkes'
  | 'mask'
  | 'melon-hat'
  | 'monocle'
  | 'mustache-gentleman'
  | 'rose'
  | 'round-glasses'
  | 'shirt'
  | 'smoking-cigarette'
  | 'smoking-pipe'
  | 'suit'
  | 'thug-life-glasses'
  | 'top-hat'
  | 'viking-helmet'
  | 'xmas-beard'
  | 'xmas-hat';

export interface Outfit {
  'gentleman-1': Accessories[];
  'gentleman-2': Accessories[];
  cov19: Accessories[];
  xmas: Accessories[];
  godfather: Accessories[];
  thug: Accessories[];
}

export enum Mode {
  DEV = 'DEV',
  NORMAL = 'NORMAL',
  NONE = 'NONE',
}
