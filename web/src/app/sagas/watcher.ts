import { takeEvery } from 'redux-saga/effects';
import { getTabsRequest } from '../actions/tabs';
import { loginStart } from '../actions/user';

import userSaga from './user';
import tabsSaga from './tabs';
// import logoutUserSaga from './logout';
// import getUserSaga from './userInfo';
// import postNewsSaga from './newsPost';
// import signupSaga from './signup';
// import setTokenSaga from './setToken';
// import getUserByIdSaga from './otherUser';

export default function* sagaWatcher() {
  yield takeEvery(loginStart, userSaga.loginUserSaga);
  yield takeEvery(getTabsRequest, tabsSaga.getTabsSaga);
  // yield takeEvery('FETCH_NEWS_REQUEST', fetchNewsSaga);
  // yield takeEvery('SIGNUP_REQUEST', signupSaga);
  // yield takeEvery('LOGOUT_REQUEST', logoutUserSaga);
  // yield takeEvery('GET_USER_REQUEST', getUserSaga);
  // yield takeEvery('POST_NEWS_REQUEST', postNewsSaga);
  // yield takeEvery('SET_TOKEN', setTokenSaga);
  // yield takeEvery('GET_USER_BY_ID_REQUEST', getUserByIdSaga);
}
