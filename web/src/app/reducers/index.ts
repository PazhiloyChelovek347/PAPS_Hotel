import { combineReducers } from 'redux';

import tabsReducer from './tabs';
import userReducer from './user';
// import userDataReducer from './userInfo';
// import regReducer from './';

const allReducers = combineReducers({
  // newsReducer, userReducer, userDataReducer,
  userReducer, tabsReducer,
});

export default allReducers;
