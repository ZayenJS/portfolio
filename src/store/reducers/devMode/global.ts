export interface globalState {}

const INITIAL_STATE: globalState = {};

const reducer = (state: globalState = INITIAL_STATE, action: any): globalState => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
