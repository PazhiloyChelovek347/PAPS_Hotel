import { createAction } from 'redux-actions';
import { HOTELS_REQUEST } from 'src/utils/actions/hotels';

export const getHotelsRequest = createAction(HOTELS_REQUEST);
// export const signupStart = createAction('SIGNUP_START');
// export const setToken = createAction('SET_TOKEN');

export default {
  getHotelsRequest,
  // signupStart,
  // setToken,
};
