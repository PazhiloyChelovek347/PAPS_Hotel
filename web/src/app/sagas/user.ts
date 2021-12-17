import { put, call } from 'redux-saga/effects';
import { ResponseGenerator } from 'src/types/common';
import { LoginData } from 'src/types/user';
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
};
