import { put, call } from 'redux-saga/effects';
// import { ResponseGenerator } from 'src/types/common';
// import { Tabs } from 'src/types/tabs';
import { TABS_FAILURE, TABS_SUCCESS } from 'src/utils/actions/tabs';
import { setTestData } from 'src/utils/hardcodeLS';
// import axiosInstance from '../utils/axiosInstance';

export default {
  getTabsSaga: function* getTabsSaga() {
    try {
      // const response: ResponseGenerator = yield call(axiosInstance.post, '/user/signin', { login: data.payload.login, password: data.payload.password });
      // localStorage.setItem('token', response.data.token);
      // localStorage.setItem('isLoggedIn', 'true');
      let tabs: string | null = null;
      if (localStorage.getItem('tabs')) {
        // @ts-ignore
        tabs = JSON.parse(localStorage.getItem('tabs'));
      } else {
        setTestData();
        // @ts-ignore
        tabs = JSON.parse(localStorage.getItem('tabs'));
      }
      yield put({ type: TABS_SUCCESS, tabs });
    } catch (error) {
      // localStorage.removeItem('token');
      yield put({ type: TABS_FAILURE, error });
    }
  },
};
