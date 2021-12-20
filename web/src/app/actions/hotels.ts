import { createAction } from 'redux-actions';
import { HOTELS_REQUEST, HOTELS_ADD_REQUEST } from 'src/utils/actions/hotels';

export const getHotelsRequest = createAction(HOTELS_REQUEST);
export const addHotelRequest = createAction(HOTELS_ADD_REQUEST);
// export const signupStart = createAction('SIGNUP_START');
// export const setToken = createAction('SET_TOKEN');

export default {
  getHotelsRequest,
  addHotelRequest,
  // signupStart,
  // setToken,
};
