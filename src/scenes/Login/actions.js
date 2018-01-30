//import client from '../../setup/apolloClient';

export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const LOGOUT = 'LOGOUT';

export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  user,
});

export const logout = () => {
  setTimeout(client.resetStore);
  //wsClient.unsubscribeAll(); // unsubscribe from all subscriptions
  //wsClient.close(); // close the WebSocket connection
  return { type: LOGOUT };
};