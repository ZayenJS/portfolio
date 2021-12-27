import { IWorkProject } from '../models';

import brownskinBeautyImage1 from '../assets/images/WorkProjects/brownskinbeauty.png';
import rpgGameImage1 from '../assets/images/WorkProjects/rpgGame.png';
import sensimeImage1 from '../assets/images/WorkProjects/sensime.png';
import theTavernImage1 from '../assets/images/WorkProjects/the-tavern.png';
import covidTrackerImage1 from '../assets/images/WorkProjects/covid-tracker.png';
import portfolioImage1 from '../assets/images/WorkProjects/portfolio.png';
import ristorante from '../assets/images/WorkProjects/ristorante.png';

import html from '../assets/images/icons/html-5.svg';
import css from '../assets/images/icons/css.svg';
import javascript from '../assets/images/icons/javascript.svg';
import typescript from '../assets/images/icons/typescript.svg';
import sass from '../assets/images/icons/sass.svg';
import nodejs from '../assets/images/icons/nodejs.svg';
import postgresql from '../assets/images/icons/postgresql.svg';
import react from '../assets/images/icons/react.svg';
import reactts from '../assets/images/icons/react_ts.svg';
import redux from '../assets/images/icons/redux.svg';
import graphql from '../assets/images/icons/graphql.svg';
import nestjs from '../assets/images/icons/nestjs.svg';
import express from '../assets/images/icons/express.svg';
import twig from '../assets/images/icons/twig.svg';
import php from '../assets/images/icons/php.svg';
import mysql from '../assets/images/icons/mysql.svg';

export const projs: IWorkProject[] = [
  {
    name: 'brownskin beauty',
    description: `Site vitrine réalisé pour une cliente
      créatrice de cosmétiques en tout genre.
      Je me suis chargé du code, du design et du logo et de la mise en ligne.`,
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
    description: `Petit jeu réalisé en javascript dans le cadre de
      ma formation developpeur web fullstack javascript chez O'Clock.
      J'y ai ajouté quelques fonctionnalités suplémentaires
      comme par exemple : pièges, vies, niveaux
      (mon meilleur score : niveau 46 😉).`,
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
    description: 'Blog crée pour une cliente sans CMS.',
    image: sensimeImage1,
    gallery: [sensimeImage1],
    url: '',
    repository: 'https://github.com/ZayenJS/sensime',
    technos: [
      { name: 'React Typescript', logo: reactts },
      { name: 'Redux', logo: redux },
      { name: 'SASS/SCSS', logo: sass },
      { name: 'NodeJS', logo: nodejs },
      { name: 'Express', logo: express },
      { name: 'Postgresql', logo: postgresql },
    ],
  },
  {
    name: 'The Tavern',
    description: `Site réalisé dans le cadre du projet de fin
      de formation de la formation developpeur web
      fullstack JS de l'école O'Clock.
      Il s'agit du premier réseau social dédié au jeu de rôle.
      Il est composé de deux parties principales :
      un fil d'actualité et une salle de jeu avec chat et partage d'écran.`,
    image: theTavernImage1,
    gallery: [theTavernImage1],
    repository: 'https://github.com/the-tavern-social-network/the-tavern',
    technos: [
      { name: 'React', logo: react },
      { name: 'Redux', logo: redux },
      { name: 'SASS/SCSS', logo: sass },
      { name: 'NodeJS', logo: nodejs },
      { name: 'Express', logo: express },
      { name: 'Postgresql', logo: postgresql },
    ],
  },
  {
    name: 'covid tracker',
    description: `Application permettant de suivre l'évolution
      du COVID-19 au fil du temps par pays ou globalement.
      L'application permet aussi d'obtenir les dernières infos
      du covid par pays.`,
    image: covidTrackerImage1,
    gallery: [covidTrackerImage1],
    url: '',
    repository: 'https://github.com/ZayenJS/covid-tracker',
    technos: [
      { name: 'React Typescript', logo: reactts },
      { name: 'Redux', logo: redux },
      { name: 'SASS/SCSS', logo: sass },
    ],
  },
  {
    name: 'cli-rjs',
    description: `Mon premier package NPM ! Il sert à améliorer la productivité dans un projet react
      et permet d'arrêter les copier-coller en tout genre lors de la création de composants.
      Il est capable de créer un nouveau projet avec des options afin d'initialiser le projet avec typescript,
      redux, ou bien react-router directement à la création du projet.
      Il permet aussi de créer des composants directement en ligne de commande.`,
    image: react,
    url: 'https://www.npmjs.com/package/cli-rjs',
    repository: 'https://github.com/rjs-cli/rjs-cli',
    technos: [
      { name: 'NodeJS', logo: nodejs },
      { name: 'TypeScript', logo: typescript },
    ],
  },
  {
    name: 'ristorante',
    description: "Site réalisé en tant que formateur pour enseigner la réalisation d'un site web.",
    image: ristorante,
    gallery: [ristorante],
    url: 'https://ristorante.david-nogueira.dev',
    repository: '',
    technos: [
      { name: 'HTML', logo: html },
      { name: 'SASS/SCSS', logo: sass },
      { name: 'JavaScript', logo: javascript },
      { name: 'PHP', logo: php },
      { name: 'Twig', logo: twig },
      { name: 'MySQL', logo: mysql },
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
      { name: 'React Typescript', logo: reactts },
      { name: 'Redux', logo: redux },
      { name: 'SASS/SCSS', logo: sass },
      { name: 'NestJS', logo: nestjs },
      { name: 'Graphql', logo: graphql },
      { name: 'Postgresql', logo: postgresql },
    ],
  },
];
