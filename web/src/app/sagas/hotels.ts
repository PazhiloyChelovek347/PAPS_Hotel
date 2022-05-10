import { ConstructionOutlined } from '@mui/icons-material';
import { put, call, select } from 'redux-saga/effects';
import { ResponseGenerator } from 'src/types/common';
// import { ResponseGenerator } from 'src/types/common';
// import { Tabs } from 'src/types/tabs';
import {
  BOOKINGS_SETUP_SUCCESS,
  BOOKINGS_SET_FAILURE,
  HOTELS_ADD_FAILURE,
  HOTELS_ADD_SUCCESS,
  HOTELS_DELETE_FAILURE,
  HOTELS_DELETE_SUCCESS,
  HOTELS_EDIT_FAILURE,
  HOTELS_EDIT_SUCCESS,
  HOTELS_FAILURE,
  HOTELS_SUCCESS,
  BOOKINGS_SET_SUCCESS,
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
      // @ts-ignore
      localStorage.setItem('ids', JSON.stringify(Number(JSON.parse(localStorage.getItem('ids'))) + 1));
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

  setBookingsSaga: function* setBookingsSaga(data: any) {
    try {
      // @ts-ignore
      const users = JSON.parse(localStorage.getItem('Users'));
      let usersWithoutChanges;
      let newUser;
      let temp;
      console.log(11111, data.payload);
      switch (data.payload.action) {
        case 'delete':
          if (!users.find((u: any) => u.bookings.find((b: any) => b.hotel === data.payload.id))) {
            // console.log(users.find((u: any) => u.bookings.find((b: any) => {
            //   console.log(b.hotel, data.payload.id);
            //   return b.hotel === data.payload.id;
            // })));
            throw new Error('User with booking not found');
          }
          temp = users.map((u: any) => ({ ...u, bookings: u.bookings.filter((b: any) => b.hotel !== data.payload.id) }));
          localStorage.setItem('Users', JSON.stringify(temp));
          yield put({ type: BOOKINGS_SETUP_SUCCESS, users: temp });
          break;
        case 'setup':
          console.log(123123, data.payload);
          usersWithoutChanges = users.filter((user: any) => user?.login !== (data?.payload?.user?.login || data.payload?.row?.user?.login) && user.fio !== (data?.payload?.user?.fio && data.payload?.row?.user?.fio));
          newUser = {
            ...(data?.payload?.user || data?.payload?.row?.user),
            bookings: [
              ...(
                data?.payload?.user?.bookings.filter((booking: any) => booking.status !== false && booking.status !== true)
                || data?.payload?.row?.user?.bookings.filter((booking: any) => booking.status !== false && booking.status !== true)
              ), {
                hotel: data.payload.id
                   || data?.payload?.row?.hotel,
                approved: null
                    || data.payload.status,
              },
            ],
          };
          localStorage.setItem('Users', JSON.stringify([...usersWithoutChanges, newUser]));
          localStorage.setItem('user', JSON.stringify(newUser));
          yield put({ type: BOOKINGS_SET_SUCCESS, users: [...usersWithoutChanges, newUser], newUser });
          break;
        case 'forTable':
          yield put({ type: BOOKINGS_SETUP_SUCCESS, users });
          break;
        default:
          break;
      }
      // const hotels: ResponseGenerator = yield select(({ hotelsReducer }) => hotelsReducer?.hotels);
      // @ts-ignore
      // if (hotels.find((hotel:any) => hotel.id === data.payload.id) === -1) {
      // throw new Error('Hotel not found');
      // }
      // @ts-ignore
      // localStorage.setItem('Hotels', JSON.stringify([...JSON.parse(localStorage.getItem('Hotels')).filter(((hotel:any) => hotel.id !== data.payload.id)), data.payload]));
      // yield put({ type: HOTELS_EDIT_SUCCESS, hotel: data.payload });
    } catch (error) {
      yield put({ type: BOOKINGS_SET_FAILURE, error });
    }
  },
};
