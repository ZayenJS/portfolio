import { Mode } from '../../../models';

export interface HoverHeaderPayload {
  isHovered: boolean;
}

export interface ChangeModePayload {
  mode: Mode;
}
