export const getTechnologies = (imagesPath: string) => [
  { name: 'C#', iconUrl: `${imagesPath}/csharp.svg` },
  { name: 'CSS', iconUrl: `${imagesPath}/css.svg` },
  { name: 'Dart', iconUrl: `${imagesPath}/dart.svg` },
  { name: 'Docker', iconUrl: `${imagesPath}/docker.svg` },
  { name: 'Express', iconUrl: `${imagesPath}/express.svg` },
  { name: 'Flutter', iconUrl: `${imagesPath}/flutter.svg` },
  { name: 'GraphQL', iconUrl: `${imagesPath}/graphql.svg` },
  { name: 'HTML', iconUrl: `${imagesPath}/html.svg` },
  { name: 'JavaScript', iconUrl: `${imagesPath}/javascript.svg` },
  { name: 'MongoDB', iconUrl: `${imagesPath}/mongodb.svg` },
  { name: 'MySQL', iconUrl: `${imagesPath}/mysql.svg` },
  { name: 'NestJS', iconUrl: `${imagesPath}/nestjs.svg` },
  { name: 'NodeJS', iconUrl: `${imagesPath}/nodejs.svg` },
  { name: 'NPM', iconUrl: `${imagesPath}/npm.svg` },
  { name: 'PHP', iconUrl: `${imagesPath}/php.svg` },
  { name: 'PostgreSQL', iconUrl: `${imagesPath}/postgresql.svg` },
  { name: 'Python', iconUrl: `${imagesPath}/python.svg` },
  { name: 'React TypeScript', iconUrl: `${imagesPath}/react_ts.svg` },
  { name: 'React', iconUrl: `${imagesPath}/react.svg` },
  { name: 'Redis', iconUrl: `${imagesPath}/redis.svg` },
  { name: 'Redux', iconUrl: `${imagesPath}/redux.svg` },
  { name: 'Sass', iconUrl: `${imagesPath}/sass.svg` },
  { name: 'Symfony', iconUrl: `${imagesPath}/symfony.svg` },
  { name: 'Twig', iconUrl: `${imagesPath}/twig.svg` },
  { name: 'TypeScript', iconUrl: `${imagesPath}/typescript.svg` },
  { name: 'Vue', iconUrl: `${imagesPath}/vue.svg` },
  { name: 'Yarn', iconUrl: `${imagesPath}/yarn.svg` },
];

export const getProjects = () => [
  {
    name: 'Brownskin Beauty',
    description: `Site vitrine réalisé pour une cliente
      créatrice de cosmétiques en tout genre.
      Je me suis chargé du code, du design et du logo et de la mise en ligne.`,
    url: 'https://brownskinbeauty.fr',
    repository: 'https://github.com/ZayenJS/brownskinbeauty',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    name: 'Find Your Way',
    description: `Petit jeu réalisé en javascript dans le cadre de
      ma formation developpeur web fullstack javascript chez O'Clock.
      J'y ai ajouté quelques fonctionnalités suplémentaires
      comme par exemple : pièges, vies, niveaux
      (mon meilleur score : niveau 46 😉).`,
    url: 'https://zayenjs.github.io/find-your-way-game/',
    repository: 'https://github.com/ZayenJS/find-your-way-game',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    name: "sensi'me",
    description: 'Blog crée pour une cliente sans CMS.',
    url: '',
    repository: 'https://github.com/ZayenJS/sensime',
    technologies: [
      'React',
      'TypeScript',
      'Redux',
      'Sass',
      'NodeJS',
      'Express',
      'PostgreSQL',
    ],
  },
  {
    name: 'The Tavern',
    description: `Site réalisé dans le cadre du projet de fin
      de formation de la formation developpeur web
      fullstack JS de l'école O'Clock.
      Il s'agit du premier réseau social dédié au jeu de rôle.
      Il est composé de deux parties principales :
      un fil d'actualité et une salle de jeu avec chat et partage d'écran en temps réel en utilisant la technologie des WebSockets.`,
    repository: 'https://github.com/the-tavern-social-network/the-tavern',
    technologies: ['React', 'Redux', 'Sass', 'NodeJS', 'Express', 'PostgreSQL'],
  },
  {
    name: 'covid tracker',
    description: `Application permettant de suivre l'évolution
      du COVID-19 au fil du temps par pays ou globalement.
      L'application permet aussi d'obtenir les dernières infos
      du covid par pays. Elle a principalement été réalisée dans le but de me former sur TypeScript.
      Cette application n'est aucunement liée à https://covidtracker.fr/.
      `,
    url: '',
    repository: 'https://github.com/ZayenJS/covid-tracker',
    technologies: ['React', 'TypeScript', 'Redux', 'Sass'],
  },
  {
    name: 'cli-rjs',
    description: `Mon premier package NPM ! Il sert à améliorer la productivité dans un projet react
      et permet d'arrêter les copier-coller en tout genre lors de la création de composants.
      Il est capable de créer un nouveau projet avec des options afin d'initialiser le projet avec typescript,
      redux, ou bien react-router directement à la création du projet.
      Il permet aussi de créer des composants directement en ligne de commande.`,
    url: 'https://www.npmjs.com/package/cli-rjs',
    repository: 'https://github.com/rjs-cli/rjs-cli',
    technologies: ['NodeJS', 'TypeScript'],
  },
  {
    name: 'ristorante',
    description:
      "Site réalisé en tant que formateur pour enseigner la réalisation d'un site web de A à Z en HTML/CSS/JavaScript/PHP et MySQL.",

    url: 'https://ristorante.david-nogueira.dev',
    repository: 'https://github.com/ZayenJS/dw5-ristorante',
    technologies: [
      'HTML',
      'Sass',
      'JavaScript',
      'TypeScript',
      'PHP',
      'Twig',
      'MySQL',
    ],
  },
  {
    name: 'fairly made',
    description:
      "Site réalisé en tant que formateur pour enseigner la réalisation d'un site web.",
    url: 'https://fairly-made.david-nogueira.dev',
    repository: 'https://github.com/ZayenJS/dw5-ristorante',
    technologies: ['HTML', 'Sass', 'JavaScript', 'PHP', 'Twig', 'MySQL'],
  },
  {
    name: 'portfolio',
    description: 'Le portfolio sur lequel vous vous trouvez actuellement 😁',
    url: 'https://david-nogueira.dev',
    repository: 'https://github.com/ZayenJS/portfolio',
    technologies: [
      'React',
      'TypeScript',
      'Redux',
      'Sass',
      'NestJS',
      'GraphQL',
      'PostgreSQL',
    ],
  },
];
