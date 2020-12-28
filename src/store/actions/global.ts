export const HOVER_HEADER = 'HOVER_HEADER';

export interface HoverHeader {
  type: typeof HOVER_HEADER;
  isHovered: boolean;
}

export const hoverHeader = (isHovered: boolean): HoverHeader => ({
  type: HOVER_HEADER,
  isHovered,
});

export type GlobalActions = HoverHeader;
