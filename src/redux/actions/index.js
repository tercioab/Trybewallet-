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
