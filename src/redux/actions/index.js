export function userAction(payload) {
  return {
    type: 'USER',
    payload,
  };
}

export function walletAction(payload) {
  return {
    type: 'WALLET',
    payload,
  };
}

export function fetchEconomia() {
  return async (dispatch) => { // thunk declarado
    dispatch(requestMovies());
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    return dispatch(receiveCoins(data));
  };
}
