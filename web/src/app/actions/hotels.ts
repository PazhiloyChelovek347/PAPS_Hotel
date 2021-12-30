import { createAction } from 'redux-actions';
import {
  HOTELS_REQUEST, HOTELS_ADD_REQUEST, HOTELS_EDIT_REQUEST, HOTELS_DELETE_REQUEST, BOOKINGS_SET_REQUEST,
} from 'src/utils/actions/hotels';

export const getHotelsRequest = createAction(HOTELS_REQUEST);
export const addHotelRequest = createAction(HOTELS_ADD_REQUEST);
export const editHotelRequest = createAction(HOTELS_EDIT_REQUEST);
export const delHotelRequest = createAction(HOTELS_DELETE_REQUEST);
export const setBookinglRequest = createAction(BOOKINGS_SET_REQUEST);

export default {
  getHotelsRequest,
  addHotelRequest,
  editHotelRequest,
  delHotelRequest,
  setBookinglRequest,
};
