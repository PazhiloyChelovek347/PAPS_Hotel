import { createAction } from 'redux-actions';
import { TABS_REQUEST } from 'src/utils/actions/tabs';

export const getTabsRequest = createAction(TABS_REQUEST);
// export const signupStart = createAction('SIGNUP_START');
// export const setToken = createAction('SET_TOKEN');

export default {
  getTabsRequest,
  // signupStart,
  // setToken,
};
