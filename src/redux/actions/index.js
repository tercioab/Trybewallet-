export function userAction(payload) {
  return {
    type: 'USER',
    payload,
  };
}

export function currencies(payload) {
  return {
    type: 'WALLET',
    payload,
  };
}

export function expenses(payload) {
  return {
    type: 'EXPENSES',
    payload,
  };
}

export function fetchEconomia() {
  return async (dispatch) => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    delete data.USDT;
    dispatch(currencies(Object.keys(data)));
  };
}
