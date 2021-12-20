import { put, call } from 'redux-saga/effects';
// import { ResponseGenerator } from 'src/types/common';
// import { Tabs } from 'src/types/tabs';
import {
  HOTELS_ADD_FAILURE, HOTELS_ADD_SUCCESS, HOTELS_FAILURE, HOTELS_SUCCESS,
} from 'src/utils/actions/hotels';
import { setTestData } from 'src/utils/hardcodeLS';
// import axiosInstance from '../utils/axiosInstance';

export default {
  getHotelsSaga: function* getHotelsSaga() {
    try {
      // const response: ResponseGenerator = yield call(axiosInstance.post, '/user/signin', { login: data.payload.login, password: data.payload.password });
      // localStorage.setItem('token', response.data.token);
      // localStorage.setItem('isLoggedIn', 'true');
      let hotels: string | null = null;
      if (localStorage.getItem('Hotels')) {
        // @ts-ignore
        hotels = JSON.parse(localStorage.getItem('Hotels'));
      } else {
        setTestData();
        // @ts-ignore
        hotels = JSON.parse(localStorage.getItem('Hotels'));
      }
      yield put({ type: HOTELS_SUCCESS, hotels });
    } catch (error) {
      // localStorage.removeItem('token');
      yield put({ type: HOTELS_FAILURE, error });
    }
  },

  addHotelSaga: function* addHotelSaga(data: any) {
    try {
      console.log(data);
      // const response: ResponseGenerator = yield call(axiosInstance.post, '/user/signin', { login: data.payload.login, password: data.payload.password });
      // localStorage.setItem('token', response.data.token);
      // localStorage.setItem('isLoggedIn', 'true');
      yield put({ type: HOTELS_ADD_SUCCESS, hotel: data.payload });
    } catch (error) {
      // localStorage.removeItem('token');
      yield put({ type: HOTELS_ADD_FAILURE, error });
    }
  },
};
