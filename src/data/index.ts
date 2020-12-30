import { IWorkProject } from '../models';

import brownskinBeautyImage1 from '../assets/images/WorkProjects/brownskinbeauty.png';
import rpgGameImage1 from '../assets/images/WorkProjects/rpgGame.png';
import sensimeImage1 from '../assets/images/WorkProjects/sensime.png';
import theTavernImage1 from '../assets/images/WorkProjects/the-tavern.png';
import covidTrackerImage1 from '../assets/images/WorkProjects/covid-tracker.png';
import rjsImage1 from '../assets/images/WorkProjects/rjs.svg';
import portfolioImage1 from '../assets/images/WorkProjects/portfolio.png';

import html from '../assets/images/icons/html-5.svg';
import css from '../assets/images/icons/css.svg';
import javascript from '../assets/images/icons/javascript.svg';
import typescript from '../assets/images/icons/typescript.svg';
import sass from '../assets/images/icons/sass.svg';
import nodejs from '../assets/images/icons/nodejs.svg';
import postgresql from '../assets/images/icons/postgresql.svg';
import react from '../assets/images/icons/react.svg';
import redux from '../assets/images/icons/redux.svg';
import socketIo from '../assets/images/icons/socket.svg';

export const projs: IWorkProject[] = [
  {
    name: 'brownskin beauty',
    description: 'Site vitrine réalisé pour une cliente créatrice de cosmétiques en tout genre.',
    image: brownskinBeautyImage1,
    gallery: [brownskinBeautyImage1],
    url: 'http://brownskinbeauty.fr',
    repository: 'https://github.com/ZayenJS/brownskinbeauty',
    technos: [
      { name: 'HTML', logo: html },
      { name: 'CSS', logo: css },
      { name: 'JavaScript', logo: javascript },
    ],
  },
  {
    name: 'Find Your Way',
    description:
      "Petit jeu réalisé en javascript dans le cadre de ma formation developpeur web fullstack javascript chez O'Clock. (mon meilleur score : niveau 46 😉)",
    image: rpgGameImage1,
    gallery: [rpgGameImage1],
    url: 'https://zayenjs.github.io/find-your-way-game/',
    repository: 'https://github.com/ZayenJS/find-your-way-game',
    technos: [
      { name: 'HTML', logo: html },
      { name: 'CSS', logo: css },
      { name: 'JavaScript', logo: javascript },
    ],
  },
  {
    name: "sensi'me",
    description: 'Blog crée pour une cliente.',
    image: sensimeImage1,
    gallery: [sensimeImage1],
    url: '',
    repository: 'https://github.com/ZayenJS/sensime',
    technos: [
      { name: 'React', logo: react },
      { name: 'Redux', logo: redux },
      { name: 'TypeScript', logo: typescript },
      { name: 'SASS/SCSS', logo: sass },
      { name: 'NodeJS', logo: nodejs },
      { name: 'Postgresql', logo: postgresql },
    ],
  },
  {
    name: 'The Tavern',
    description:
      "Site réalisé dans le cadre du projet de fin de formation de la formation developpeur web fullstack JS de l'école O'Clock. Il s'agit du premier réseau social dédié au jeu de rôle.",
    image: theTavernImage1,
    gallery: [theTavernImage1, rjsImage1, brownskinBeautyImage1],
    repository: 'https://github.com/the-tavern-social-network/the-tavern',
    technos: [
      { name: 'React', logo: react },
      { name: 'Redux', logo: redux },
      { name: 'SASS/SCSS', logo: sass },
      { name: 'NodeJS', logo: nodejs },
      { name: 'Postgresql', logo: postgresql },
      { name: 'Socket.io', logo: socketIo },
    ],
  },
  {
    name: 'covid tracker',
    description:
      "Application permettant de suivre l'évolution du COVID-19 au fil du temps par pays ou globalement.",
    image: covidTrackerImage1,
    gallery: [covidTrackerImage1],
    url: '',
    repository: 'https://github.com/ZayenJS/covid-tracker',
    technos: [
      { name: 'React', logo: react },
      { name: 'Redux', logo: redux },
      { name: 'TypeScript', logo: typescript },
      { name: 'SASS/SCSS', logo: sass },
    ],
  },
  {
    name: 'cli-rjs',
    description:
      " It's a tool to help speed up productivity in React projects and stop copying, pasting, and renaming files each time you want to create a new component. It can init a new project (thanks to create-react-app) or create components from the command line",
    image: rjsImage1,
    url: 'https://www.npmjs.com/package/cli-rjs',
    repository: 'https://github.com/rjs-cli/rjs-cli',
    technos: [
      {
        name: 'NodeJS',
        logo: nodejs,
      },
      {
        name: 'TypeScript',
        logo: typescript,
      },
    ],
  },
  {
    name: 'portfolio',
    description: 'Le portfolio sur lequel vous vous trouvez actuellement 😁',
    image: portfolioImage1,
    gallery: [portfolioImage1],
    url: 'https://david-nogueira.dev',
    repository: 'https://github.com/ZayenJS/portfolio',
    technos: [
      { name: 'React', logo: react },
      { name: 'Redux', logo: redux },
      { name: 'TypeScript', logo: typescript },
      { name: 'SASS/SCSS', logo: sass },
    ],
  },
];
