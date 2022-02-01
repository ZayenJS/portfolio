export const getTechnologies = (imagesPath: string) => [
  { name: 'C#', icon_url: `${imagesPath}/csharp.svg` },
  { name: 'CSS', icon_url: `${imagesPath}/css.svg` },
  { name: 'Dart', icon_url: `${imagesPath}/dart.svg` },
  { name: 'Docker', icon_url: `${imagesPath}/docker.svg` },
  { name: 'Express', icon_url: `${imagesPath}/express.svg` },
  { name: 'Flutter', icon_url: `${imagesPath}/flutter.svg` },
  { name: 'GraphQL', icon_url: `${imagesPath}/graphql.svg` },
  { name: 'HTML', icon_url: `${imagesPath}/html.svg` },
  { name: 'JavaScript', icon_url: `${imagesPath}/javascript.svg` },
  { name: 'MongoDB', icon_url: `${imagesPath}/mongodb.svg` },
  { name: 'MySQL', icon_url: `${imagesPath}/mysql.svg` },
  { name: 'NestJS', icon_url: `${imagesPath}/nestjs.svg` },
  { name: 'NodeJS', icon_url: `${imagesPath}/nodejs.svg` },
  { name: 'NPM', icon_url: `${imagesPath}/npm.svg` },
  { name: 'PHP', icon_url: `${imagesPath}/php.svg` },
  { name: 'PostgreSQL', icon_url: `${imagesPath}/postgresql.svg` },
  { name: 'Python', icon_url: `${imagesPath}/python.svg` },
  { name: 'React TypeScript', icon_url: `${imagesPath}/react_ts.svg` },
  { name: 'React', icon_url: `${imagesPath}/react.svg` },
  { name: 'Redis', icon_url: `${imagesPath}/redis.svg` },
  { name: 'Redux', icon_url: `${imagesPath}/redux.svg` },
  { name: 'Sass', icon_url: `${imagesPath}/sass.svg` },
  { name: 'Symfony', icon_url: `${imagesPath}/symfony.svg` },
  { name: 'Twig', icon_url: `${imagesPath}/twig.svg` },
  { name: 'TypeScript', icon_url: `${imagesPath}/typescript.svg` },
  { name: 'Vue', icon_url: `${imagesPath}/vue.svg` },
  { name: 'Yarn', icon_url: `${imagesPath}/yarn.svg` },
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
    images: [],
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
    images: [],
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
    images: [],
  },
  {
    name: 'The Tavern',
    description: `Site réalisé dans le cadre du projet de fin
      de formation de la formation developpeur web
      fullstack JS de l'école O'Clock.
      Il s'agit du premier réseau social dédié au jeu de rôle.
      Il est composé de deux parties principales :
      un fil d'actualité et une salle de jeu avec chat et partage d'écran.`,
    repository: 'https://github.com/the-tavern-social-network/the-tavern',
    technologies: ['React', 'Redux', 'Sass', 'NodeJS', 'Express', 'PostgreSQL'],
    images: [],
  },
  {
    name: 'covid tracker',
    description: `Application permettant de suivre l'évolution
      du COVID-19 au fil du temps par pays ou globalement.
      L'application permet aussi d'obtenir les dernières infos
      du covid par pays.`,
    url: '',
    repository: 'https://github.com/ZayenJS/covid-tracker',
    technologies: ['React', 'TypeScript', 'Redux', 'Sass'],
    images: [],
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
    images: [],
  },
  {
    name: 'ristorante',
    description:
      "Site réalisé en tant que formateur pour enseigner la réalisation d'un site web.",

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
    images: [],
  },
  {
    name: 'fairly made',
    description:
      "Site réalisé en tant que formateur pour enseigner la réalisation d'un site web.",
    url: 'https://fairly-made.david-nogueira.dev',
    repository: 'https://github.com/ZayenJS/dw5-ristorante',
    technologies: ['HTML', 'Sass', 'JavaScript', 'PHP', 'Twig', 'MySQL'],
    images: ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png'],
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
    images: ['portfolio.png'],
  },
];
