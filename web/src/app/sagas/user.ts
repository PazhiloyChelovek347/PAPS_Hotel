import { put, call } from 'redux-saga/effects';
import { ResponseGenerator } from 'src/types/common';
import { LoginData } from 'src/types/user';
import {
  ADMIN_SUCCESS, AL_SUCCESS, LOGIN_SUCCESS, USER_FAILURE,
} from 'src/utils/actions/hotels';
import axiosInstance from '../utils/axiosInstance';

export default {
  loginUserSaga: function* loginUserSaga(data: LoginData) {
    try {
      const response: ResponseGenerator = yield call(axiosInstance.post, '/user/signin', { login: data.payload.login, password: data.payload.password });
      // localStorage.setItem('token', response.data.token);
      // localStorage.setItem('isLoggedIn', 'true');
      yield put({ type: 'LOGIN_SUCCESS', token: response.data.token });
    } catch (error) {
      // localStorage.removeItem('token');
      yield put({ type: 'LOGIN_FAILURE', error });
    }
  },

  setAdminAndLoginSaga: function* setAdminAndLoginSaga(data:any) {
    try {
      // localStorage.setItem('token', response.data.token);
      // localStorage.setItem('isLoggedIn', 'true');
      if (data.payload?.isAdmin !== undefined) { yield put({ type: ADMIN_SUCCESS, isAdmin: data.payload.isAdmin }); }
      if (data.payload?.isLogedIn !== undefined) { yield put({ type: LOGIN_SUCCESS, isLogedIn: data.payload.isLogedIn }); }
      if (data.payload?.isLogedIn !== undefined && data.payload?.isAdmin !== undefined) { yield put({ type: AL_SUCCESS, isLogedIn: data.payload.isLogedIn, isAdmin: data.payload.isAdmin }); }
    } catch (error) {
      // localStorage.removeItem('token');
      yield put({ type: USER_FAILURE, error });
    }
  },
};
