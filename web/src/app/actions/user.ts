import { createAction } from 'redux-actions';
import { USER_SET_REQUEST } from 'src/utils/actions/hotels';

export const loginStart = createAction('LOGIN_START');
export const signupStart = createAction('SIGNUP_START');
export const setToken = createAction('SET_TOKEN');

export const logoutStart = createAction('LOGOUT_REQUEST');
export const getUserById = createAction('GET_USER_BY_ID_REQUEST');
export const getUser = createAction('GET_USER_REQUEST');

export const userSetRequest = createAction(USER_SET_REQUEST);

// export default {
//   loginStart,
//   logoutStart,
//   signupStart,
//   setToken,
//   getUserById,
//   getUser,
// };
