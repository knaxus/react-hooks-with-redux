const initialState = {
  loan: false,
};

function loanReducer(state = initialState, action) {
  switch (action.type) {
    case 'APPLIED':
      return {
        ...state,
        loan: action.payload,
      };
    default:
      return state;
  }
}

export default loanReducer;
