import { takeEvery } from 'redux-saga/effects';
import {
  addHotelRequest,
  delHotelRequest,
  editHotelRequest,
  getHotelsRequest,
  setBookinglRequest,
} from '../actions/hotels';
import {
  authRequest,
  regRequest,
  userSetRequest,
} from '../actions/user';

import userSaga from './user';
import hotelsSaga from './hotels';

export default function* sagaWatcher() {
  yield takeEvery(authRequest, userSaga.authUserSaga);
  yield takeEvery(regRequest, userSaga.regUserSaga);
  yield takeEvery(getHotelsRequest, hotelsSaga.getHotelsSaga);
  yield takeEvery(addHotelRequest, hotelsSaga.addHotelSaga);
  yield takeEvery(editHotelRequest, hotelsSaga.editHotelSaga);
  yield takeEvery(delHotelRequest, hotelsSaga.delHotelSaga);
  yield takeEvery(userSetRequest, userSaga.setAdminAndLoginSaga);
  yield takeEvery(setBookinglRequest, hotelsSaga.setBookingsSaga);
}
