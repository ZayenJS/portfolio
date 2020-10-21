import { IWorkProject } from '../models';

import brownskinBeautyImage from '../assets/images/WorkProjects/brownskinbeauty.png';
import rpgGameImage from '../assets/images/WorkProjects/rpgGame.png';
import sensimeImage from '../assets/images/WorkProjects/sensime.png';
import theTavernImage from '../assets/images/WorkProjects/the-tavern.png';
import covidTrackerImage from '../assets/images/WorkProjects/covid-tracker.png';

import html from '../assets/images/icons/html.svg';
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
    image: brownskinBeautyImage,
    url: 'http://brownskinbeauty.fr',
    repository: 'https://github.com/ZayenJS/brownskinbeauty',
    technos: [
      { name: 'HTML', logo: html },
      { name: 'CSS', logo: css },
      { name: 'Javascript', logo: javascript },
    ],
  },
  {
    name: 'Find Your Way',
    description:
      "Petit jeu réalisé en javascript dans le cadre de ma formation developpeur web fullstack javascript chez O'Clock.",
    image: rpgGameImage,
    url: 'https://zayenjs.github.io/find-your-way-game/',
    repository: 'https://github.com/ZayenJS/find-your-way-game',
    technos: [
      { name: 'HTML', logo: html },
      { name: 'CSS', logo: css },
      { name: 'Javascript', logo: javascript },
    ],
  },
  {
    name: "sensi'me",
    description: 'Blog crée pour une cliente.',
    image: sensimeImage,
    url: '',
    repository: 'https://github.com/ZayenJS/sensime',
    technos: [
      { name: 'React', logo: react },
      { name: 'Redux', logo: redux },
      { name: 'Typescript', logo: typescript },
      { name: 'SCSS', logo: sass },
      { name: 'NodeJS', logo: nodejs },
      { name: 'Postgresql', logo: postgresql },
    ],
  },
  {
    name: 'The Tavern',
    description:
      "Site réalisé dans le cadre du projet de fin de formation de la formation developpeur web fullstack JS de l'école O'Clock. Il s'agit du premier réseau social dédié au jeu de rôle.",
    image: theTavernImage,
    repository: 'https://github.com/the-tavern-social-network/the-tavern',
    technos: [
      { name: 'React', logo: react },
      { name: 'Redux', logo: redux },
      { name: 'SCSS', logo: sass },
      { name: 'NodeJS', logo: nodejs },
      { name: 'Postgresql', logo: postgresql },
      { name: 'Socket.io', logo: socketIo },
    ],
  },
  {
    name: 'covid tracker',
    description:
      "Application permettant de suivre l'évolution du COVID-19 au fil du temps par pays ou globalement.",
    image: covidTrackerImage,
    url: '',
    repository: 'https://github.com/ZayenJS/covid-tracker',
    technos: [
      { name: 'React', logo: react },
      { name: 'Redux', logo: redux },
      { name: 'Typescript', logo: typescript },
      { name: 'SCSS', logo: sass },
    ],
  },
];
