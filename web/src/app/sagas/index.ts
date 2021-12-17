import { all } from 'redux-saga/effects';

import sagaWatcher from './watcher';

export default function* rootSaga() {
  yield all([
    sagaWatcher(),
  ]);
}
