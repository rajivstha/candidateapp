import { 
    SET_CURRENT_USER, LOGOUT
  } from './actions';
  
  const initialState = {
    user: null,
  };
  
  export default function auth(state = initialState, action) {
    switch (action.type) {
      case SET_CURRENT_USER:
        return {
          ...state,
          user: action.user
        }
      case LOGOUT:
        return {
          ...state,
          user: null
        }
      default:
        return state
    }
  }