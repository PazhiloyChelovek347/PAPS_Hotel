import {
  ADMIN_SUCCESS, AL_SUCCESS, LOGIN_SUCCESS, USER_FAILURE, USER_SET_REQUEST,
} from 'src/utils/actions/hotels';
import { ExtendedAction } from '../../types/action';

const initialState = {
  loading: false,
  token: '',
  isLogedIn: false,
  isAdmin: false,
  error: {
    hasError: false,
    title: '',
    description: '',
  },
};

export default function reducerAuth(state = initialState, action: any) {
  switch (action.type) {
    case USER_SET_REQUEST:
      return {
        ...state,
        loading: true,
        error: {
          hasError: false,
          title: '',
          description: '',
        },
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isLogedIn: action.isLogedIn,
        error: {
          hasError: false,
          title: '',
          description: '',
        },
      };
    case ADMIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAdmin: action.isAdmin,
        error: {
          hasError: false,
          title: '',
          description: '',
        },
      };
    case AL_SUCCESS:
      return {
        ...state,
        loading: false,
        isAdmin: action.isAdmin,
        isLogedIn: action.isLogedIn,
        error: {
          hasError: false,
          title: '',
          description: '',
        },
      };
    case USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: {
          hasError: true,
          title: action.error.message,
          description: action.error,
        },
      };
    default:
      return state;
  }
}
