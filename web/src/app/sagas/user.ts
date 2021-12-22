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
      // const response: ResponseGenerator = yield call(axiosInstance.post, '/user/signin', { login: data.payload.login, password: data.payload.password });
      // localStorage.setItem('token', response.data.token);
      // localStorage.setItem('isLoggedIn', 'true');
      yield put({ type: AUTH_SUCCESS, a: '1' });
    } catch (error) {
      localStorage.removeItem('user');
      yield put({ type: AUTH_FAILURE, error });
    }
  },

  regUserSaga: function* regUserSaga(data: any) {
    try {
      // const response: ResponseGenerator = yield call(axiosInstance.post, '/user/signin', { login: data.payload.login, password: data.payload.password });
      // localStorage.setItem('token', response.data.token);
      // localStorage.setItem('isLoggedIn', 'true');
      yield put({ type: REG_SUCCESS, a: '1' });
    } catch (error) {
      yield put({ type: REG_FAILURE, error });
    }
  },

  setAdminAndLoginSaga: function* setAdminAndLoginSaga(data:any) {
    try {
      // localStorage.setItem('token', response.data.token);
      // localStorage.setItem('isLoggedIn', 'true');
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
