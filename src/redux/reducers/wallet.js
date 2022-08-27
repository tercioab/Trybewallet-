const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'WALLET':
    return { ...state, ...action.payload };
  default:
    return state;
  }
}

export default wallet;
