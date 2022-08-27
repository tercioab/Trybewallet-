export function userAction(payload) {
  return {
    type: 'USER',
    payload,
  };
}

function loading() {
  return {
    type: 'FUNC',
    payload: true,
  };
}

function loadingFalse() {
  return {
    type: 'FUNC',
    payload: false,
  };
}

function currencies(wallet) {
  return {
    type: wallet,
  };
}

export function fetchEconomia() {
  return async (dispatch) => { // thunk declarado
    dispatch(loading());
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    delete data.USDT;
    dispatch(currencies(Object.keys(data)));
    dispatch(loadingFalse);
  };
}
