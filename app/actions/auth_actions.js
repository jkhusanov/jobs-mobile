import { AsyncStorage } from 'react-native';
import { Facebook } from 'expo';

import API_KEYS from '../utils/config_keys';
import {
  FACEBOOK_LOGIN_SUCCESS,
  FACEBOOK_LOGIN_FAIL,
  SKIP_BUTTON_PRESSED,
} from './types';

// const API_KEY = API_KEYS[0].key


export const facebookLogin = () => async dispatch => {

  // See if the token exists
  let token = await AsyncStorage.getItem('fb_token');
  if (token) {
    // Dispatch an action saying FB login is done
    dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
  }
  else {
    // Start up FB Login process
    doFacebookLogin(dispatch);
  }
};

const doFacebookLogin = async dispatch => {
  let { type, token } = await Facebook.logInWithReadPermissionsAsync(API_KEYS[0].key, {
    permissions: ['public_profile']
  });

  if (type === 'cancel') {
    return dispatch({ type: FACEBOOK_LOGIN_FAIL })
  }

  await AsyncStorage.setItem('fb_token', token);
  dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
};

export const skipLogin = () => async dispatch => {
  let token = await AsyncStorage.getItem('fb_token');
  if (token) {
    // Dispatch an action saying FB login is done
    dispatch({ type: SKIP_BUTTON_PRESSED, payload: token });
  }
  else {
    await AsyncStorage.setItem('fb_token', 'skipped');
    dispatch({ type: SKIP_BUTTON_PRESSED, payload: token });
  }
};