import { takeEvery } from 'redux-saga/effects';
import {
  addHotelRequest,
  delHotelRequest,
  editHotelRequest,
  getHotelsRequest,
  setApprove,
  setBookingRequest,
} from '../actions/hotels';
import {
  authRequest,
  regRequest,
  userSetRequest,
  logoutRequest,
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
  yield takeEvery(setBookingRequest, hotelsSaga.setBookingsSaga);
  yield takeEvery(logoutRequest, userSaga.logoutSaga);
  yield takeEvery(setApprove, userSaga.setApproveSaga);
}
