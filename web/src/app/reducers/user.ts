import {
  ADMIN_SUCCESS, AL_SUCCESS, AUTH_FAILURE, AUTH_REQUEST, AUTH_SUCCESS, LOGIN_SUCCESS, REG_FAILURE, REG_REQUEST, REG_SUCCESS, USER_FAILURE, USER_SET_REQUEST,
} from 'src/utils/actions/hotels';
import { ExtendedAction } from '../../types/action';

const initialState = {
  loading: false,
  token: '',
  // @ts-ignore
  user: JSON.parse(localStorage.getItem('user')),
  // @ts-ignore
  isLogedIn: JSON.parse(localStorage.getItem('isLogedIn')),
  // @ts-ignore
  isAdmin: JSON.parse(localStorage.getItem('isAdmin')),
  error: {
    hasError: false,
    title: '',
    description: '',
  },
};

export default function reducerAuth(state = initialState, action: any) {
  switch (action.type) {
    case AUTH_REQUEST:
    case REG_REQUEST:
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
    case REG_SUCCESS:
      return {
        ...state,
        loading: false,
        isLogedIn: true,
        isAdmin: false,
        user: action.user,
        error: {
          hasError: false,
          title: '',
          description: '',
        },
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        isLogedIn: true,
        isAdmin: action.user.isAdmin || false,
        user: action.user,
        // isAdmin: action.isAdmin,
        error: {
          hasError: false,
          title: '',
          description: '',
        },
      };
    case AUTH_FAILURE:
    case REG_FAILURE:
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
