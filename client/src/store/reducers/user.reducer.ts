import { User } from '../../models/User';
import { AuthActions, AuthActionType } from '../actions/auth';

export interface UserState {
  user: User | null;
}

const INITIAL_STATE: UserState = {
  user: null,
};

const userReducer = (state: UserState = INITIAL_STATE, action: AuthActionType): UserState => {
  switch (action.type) {
    case AuthActions.LOGIN: {
      const isLoggedIn = !!action.payload.user;

      if (isLoggedIn) {
        return {
          ...state,
          user: action.payload.user as User,
        };
      }

      return state;
    }
    default:
      return state;
  }
};

export default userReducer;
