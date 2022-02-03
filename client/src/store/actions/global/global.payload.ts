import { FormErrorMessage } from '../../../constants/FormErrors';
import { Mode } from '../../../models';
import { State } from '../../reducers';

export interface HoverHeaderPayload {
  isHovered: boolean;
}

export interface ChangeModePayload {
  mode: Mode;
}
export interface ChangeValuePayload {
  name: string;
  reducerName: keyof State;
  value: string;
}

export interface FieldTouchedPayload {
  name: string;
  reducerName: keyof State;
}

export interface SetFieldErrorPayload {
  reducerName: keyof State;
  name: string;
  errorMessage: string | FormErrorMessage;
}

export interface ResetNotificationPayload {
  reducerName: keyof State;
}
