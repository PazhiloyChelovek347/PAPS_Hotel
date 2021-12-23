import { put } from 'redux-saga/effects';
import {
  ADMIN_SUCCESS,
  AL_SUCCESS,
  AUTH_FAILURE,
  AUTH_SUCCESS,
  LOGIN_SUCCESS,
  REG_FAILURE,
  REG_SUCCESS,
  USER_FAILURE,
} from 'src/utils/actions/hotels';

export default {
  authUserSaga: function* authUserSaga(data: any) {
    try {
      // @ts-ignore
      const users = JSON.parse(localStorage.getItem('Users'));
      const fullUser = users.find((u: any) => {
        if (data.payload.login === u.login && data.payload.password === u.password) { return true; }
        return false;
      });

      if (fullUser) {
        localStorage.setItem('user', JSON.stringify(fullUser));
        localStorage.setItem('isAdmin', JSON.stringify(fullUser.isAdmin || false));
        localStorage.setItem('isLogedIn', JSON.stringify(true));
        yield put({ type: AUTH_SUCCESS, user: fullUser });
      } else {
        throw new Error('User not found');
      }
    } catch (error) {
      localStorage.removeItem('user');
      localStorage.setItem('isAdmin', JSON.stringify(false));
      localStorage.setItem('isLogedIn', JSON.stringify(false));
      yield put({ type: AUTH_FAILURE, error });
    }
  },

  regUserSaga: function* regUserSaga(data: any) {
    try {
      // @ts-ignore
      const users = JSON.parse(localStorage.getItem('Users'));
      const fullUser = users.find((u: any) => {
        if (data.payload.login === u.login) { return true; }
        return false;
      });

      if (fullUser) {
        throw new Error('User already registered');
      } else {
        const u = {
          bookings: [],
          fio: data.payload.fio,
          login: data.payload.login,
          password: data.payload.password,
        };
        localStorage.setItem('user', JSON.stringify(u));
        localStorage.setItem('Users', JSON.stringify([...users, u]));
        localStorage.setItem('isAdmin', JSON.stringify(false));
        localStorage.setItem('isLogedIn', JSON.stringify(true));
        yield put({ type: AUTH_SUCCESS, user: u });
      }
    } catch (error) {
      localStorage.removeItem('user');
      localStorage.setItem('isAdmin', JSON.stringify(false));
      localStorage.setItem('isLogedIn', JSON.stringify(false));
      yield put({ type: REG_FAILURE, error });
    }
  },

  setAdminAndLoginSaga: function* setAdminAndLoginSaga(data:any) {
    try {
      if (data.payload?.isAdmin !== undefined) {
        yield put({
          type: ADMIN_SUCCESS,
          isAdmin: data.payload.isAdmin,
        });
      }
      if (data.payload?.isLogedIn !== undefined) {
        yield put({
          type: LOGIN_SUCCESS,
          isLogedIn: data.payload.isLogedIn,
        });
      }
      if (data.payload?.isLogedIn !== undefined
         && data.payload?.isAdmin !== undefined) {
        yield put({
          type: AL_SUCCESS,
          isLogedIn: data.payload.isLogedIn,
          isAdmin: data.payload.isAdmin,
        });
      }
    } catch (error) {
      yield put({ type: USER_FAILURE, error });
    }
  },
};
