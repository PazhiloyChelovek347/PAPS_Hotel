import { put, call, select } from 'redux-saga/effects';
import { ResponseGenerator } from 'src/types/common';
// import { ResponseGenerator } from 'src/types/common';
// import { Tabs } from 'src/types/tabs';
import {
  HOTELS_ADD_FAILURE, HOTELS_ADD_SUCCESS, HOTELS_DELETE_FAILURE, HOTELS_DELETE_SUCCESS, HOTELS_EDIT_FAILURE, HOTELS_EDIT_SUCCESS, HOTELS_FAILURE, HOTELS_SUCCESS,
} from 'src/utils/actions/hotels';
import { setTestData } from 'src/utils/hardcodeLS';
// import axiosInstance from '../utils/axiosInstance';

export default {
  getHotelsSaga: function* getHotelsSaga() {
    try {
      let hotels: any = null;
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
      localStorage.removeItem('Hotels');
      yield put({ type: HOTELS_FAILURE, error });
    }
  },

  addHotelSaga: function* addHotelSaga(data: any) {
    try {
      // @ts-ignore
      localStorage.setItem('Hotels', JSON.stringify([...JSON.parse(localStorage.getItem('Hotels')), data.payload]));
      yield put({ type: HOTELS_ADD_SUCCESS, hotel: data.payload });
    } catch (error) {
      yield put({ type: HOTELS_ADD_FAILURE, error });
    }
  },

  editHotelSaga: function* editHotelSaga(data: any) {
    try {
      const hotels: ResponseGenerator = yield select(({ hotelsReducer }) => hotelsReducer?.hotels);
      // @ts-ignore
      if (hotels.find((hotel:any) => hotel.id === data.payload.id) === -1) {
        throw new Error('Hotel not found');
      }
      // @ts-ignore
      localStorage.setItem('Hotels', JSON.stringify([...JSON.parse(localStorage.getItem('Hotels')).filter(((hotel:any) => hotel.id !== data.payload.id)), data.payload]));
      yield put({ type: HOTELS_EDIT_SUCCESS, hotel: data.payload });
    } catch (error) {
      yield put({ type: HOTELS_EDIT_FAILURE, error });
    }
  },

  delHotelSaga: function* delHotelSaga(data: any) {
    try {
      const hotels: ResponseGenerator = yield select(({ hotelsReducer }) => hotelsReducer?.hotels);
      // @ts-ignore
      if (hotels.find((hotel:any) => hotel.id === data.payload) === -1) {
        throw new Error('Hotel not found');
      }
      // @ts-ignore
      localStorage.setItem('Hotels', JSON.stringify([...JSON.parse(localStorage.getItem('Hotels')).filter(((hotel:any) => hotel.id !== data.payload))]));
      yield put({ type: HOTELS_DELETE_SUCCESS, id: data.payload });
    } catch (error) {
      yield put({ type: HOTELS_DELETE_FAILURE, error });
    }
  },
};
