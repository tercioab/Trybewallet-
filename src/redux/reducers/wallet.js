const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'WALLET':
    return { ...state, currencies: action.payload };
  case 'EXPENSES':
    return { ...state, expenses: action.payload };
  default:
    return state;
  }
}
// [2, 4, 3, 7].reduce((acc, cur) => acc + cur) 16

export default wallet;
