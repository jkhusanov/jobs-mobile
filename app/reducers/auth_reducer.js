import { 
  FACEBOOK_LOGIN_SUCCESS, 
  FACEBOOK_LOGIN_FAIL, 
  SKIP_BUTTON_PRESSED } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case FACEBOOK_LOGIN_SUCCESS:
      return { token: action.payload }
    case FACEBOOK_LOGIN_FAIL:
      return { token: null }
    case SKIP_BUTTON_PRESSED:
      return { token: action.payload }
    default:
      return state;
  }
}