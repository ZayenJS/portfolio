export const CHANGE_PAGE = 'CHANGE_PAGE';

export interface ChangePageAction {
  type: typeof CHANGE_PAGE;
  isChanging: boolean;
}

export const changePage = (isChanging: boolean): ChangePageAction => ({
  type: CHANGE_PAGE,
  isChanging,
});

export type PageActions = ChangePageAction; /* | SomeOtherAction | ... */
