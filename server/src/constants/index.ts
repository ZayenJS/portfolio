export enum ErrorType {
  NOT_AUTH = 'Utilisateur non connecté.',
  LOGIN_FAILURE = 'Authentification échouée.',
  EMPTY_FIELD = 'Champs requis vide.',
  NOT_SECURE_PASSWORD = 'Sécurité mot de passe.',
  INVALID_EMAIL = 'Email invalide.',
  DATABASE_ERROR = 'Erreur base de donnée.',
  DUPLICATE = 'Doublon.',
}

export enum ErrorMessage {
  NOT_AUTH = 'Veuillez vous connecter pour avoir accès à cette ressource.',
  LOGIN_FAILURE = 'Utilisateur inconnu ou mot de passe incorrect.',
  EMPTY_FIELD = 'Ce champs doit être rempli !',
  NOT_SECURE_PASSWORD = "Le mot de passe n'est pas assez sécurisé !",
  INVALID_EMAIL = "Cet email n'est pas un email valide.",
  ACCOUNT_CREATION_FAILURE = 'Un problème est survenu lors de la création du compte',
  DUPLICATE = 'Cette valeur est déjà utilisée.',
}
