

const initialState = {
  balance: 0
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'WITHDRAW':
      return {
        ...state,
        balance: state.balance - action.payload
      }
    case 'DEPOSIT':
      return {
        ...state,
        balance: state.balance + action.payload
      }
    default:
      return state;
  }
}

export default reducer;
