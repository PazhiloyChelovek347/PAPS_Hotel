import { createAction } from 'redux-actions';
import {
  AUTH_REQUEST,
  LOGOUT_REQUEST,
  REG_REQUEST,
  USER_SET_REQUEST,
} from 'src/utils/actions/hotels';

export const loginStart = createAction('LOGIN_START');
export const signupStart = createAction('SIGNUP_START');

export const getUserById = createAction('GET_USER_BY_ID_REQUEST');
export const getUser = createAction('GET_USER_REQUEST');

export const userSetRequest = createAction(USER_SET_REQUEST);
export const authRequest = createAction(AUTH_REQUEST);
export const regRequest = createAction(REG_REQUEST);
export const logoutRequest = createAction(LOGOUT_REQUEST);
