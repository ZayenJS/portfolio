import { AuthActions, AuthActionType } from '../actions/auth';

export interface AuthState {
  emailOrUsername: string;
  password: string;
}

const INITIAL_STATE: AuthState = {
  emailOrUsername: 'davidnogueira.dev.pro@gmail.com',
  password: 'spp38UsY!XSqg&PP5Emf%V9CSVtJ4B6j#',
};

const authReducer = (state: AuthState = INITIAL_STATE, action: AuthActionType): AuthState => {
  switch (action.type) {
    case AuthActions.LOGIN: {
      const isLoggedIn = !!action.payload.user;

      if (isLoggedIn) {
        return {
          ...state,
          emailOrUsername: '',
          password: '',
        };
      }

      return state;
    }
    default:
      return state;
  }
};

export default authReducer;
