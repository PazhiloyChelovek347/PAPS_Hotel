import { combineReducers } from 'redux';

import hotelsReducer from './hotels';
import userReducer from './user';
// import userDataReducer from './userInfo';
// import regReducer from './';

const allReducers = combineReducers({
  // newsReducer, userReducer, userDataReducer,
  userReducer, hotelsReducer,
});

export default allReducers;
