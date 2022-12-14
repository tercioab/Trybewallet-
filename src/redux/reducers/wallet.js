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
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case 'DELETE':
    return { ...state, expenses: [...action.payload] };
  default:
    return state;
  }
}

export default wallet;
