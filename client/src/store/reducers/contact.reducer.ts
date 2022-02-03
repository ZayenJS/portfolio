import { MailStatus } from '../../models/Mail';
import { GlobalActions, GlobalActionType } from '../actions';
import { ContactActions, ContactActionType } from '../actions/contact';

export interface FieldType {
  value: string;
  touched: boolean;
  error: string;
}

interface Fields {
  fullname: FieldType;
  subject: FieldType;
  email: FieldType;
  message: FieldType;
}

export interface ContactState {
  fullname: FieldType;
  subject: FieldType;
  email: FieldType;
  message: FieldType;
  mailStatus: MailStatus;
  notification: string;
}

const INITIAL_FIELD_VALUE = { value: '', touched: false, error: '' };

const INITIAL_STATE: ContactState = {
  fullname: INITIAL_FIELD_VALUE,
  subject: INITIAL_FIELD_VALUE,
  email: INITIAL_FIELD_VALUE,
  message: INITIAL_FIELD_VALUE,
  mailStatus: MailStatus.NOT_SENT,
  notification: '',
};

const reducer = (
  state: ContactState = INITIAL_STATE,
  action: GlobalActionType | ContactActionType,
): ContactState => {
  switch (action.type) {
    case GlobalActions.CHANGE_VALUE: {
      if (action.payload.reducerName === 'contact') {
        const name = action.payload.name as keyof Fields;

        return {
          ...state,
          [name]: {
            ...state[name],
            value: action.payload.value,
          },
        };
      }

      return state;
    }
    case GlobalActions.FIELD_TOUCHED: {
      if (action.payload.reducerName === 'contact') {
        const name = action.payload.name as keyof Fields;

        return {
          ...state,
          [name]: {
            ...state[name],
            touched: true,
          },
        };
      }

      return state;
    }
    case ContactActions.SEND_MAIL: {
      const { apiResponse } = action.payload;

      if (apiResponse) {
        return {
          ...state,
          notification: apiResponse.message,
          mailStatus: apiResponse.isSent ? MailStatus.SENT : MailStatus.ERROR,
        };
      }

      return state;
    }
    case ContactActions.RESET_MAIL: {
      const hasError = state.mailStatus === MailStatus.ERROR;

      return {
        ...state,
        fullname: hasError ? state.fullname : INITIAL_FIELD_VALUE,
        email: hasError ? state.email : INITIAL_FIELD_VALUE,
        subject: hasError ? state.subject : INITIAL_FIELD_VALUE,
        message: hasError ? state.message : INITIAL_FIELD_VALUE,
      };
    }

    case GlobalActions.RESET_NOTIFICATION: {
      if (action.payload.reducerName === 'contact')
        return { ...state, notification: '', mailStatus: MailStatus.NOT_SENT };

      return state;
    }

    case GlobalActions.SET_FIELD_ERROR: {
      if (action.payload.reducerName === 'contact') {
        const name = action.payload.name as keyof Fields;

        return {
          ...state,
          [action.payload.name]: {
            ...state[name],
            error: action.payload.errorMessage,
          },
        };
      }

      return state;
    }
    default:
      return state;
  }
};

export default reducer;
