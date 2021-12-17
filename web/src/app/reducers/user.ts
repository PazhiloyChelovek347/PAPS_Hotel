import { ExtendedAction } from '../../types/action';

const initialState = {
  loading: false,
  token: '',
  isLoggedIn: false,
  error: {
    hasError: false,
    title: '',
    description: '',
  },
};

export default function reducerAuth(state = initialState, action: ExtendedAction) {
  switch (action.type) {
    case 'LOGIN_START':
      return {
        ...state,
        loading: true,
        error: {
          hasError: false,
          title: '',
          description: '',
        },
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        loading: false,
        token: action.token,
        isLoggedIn: true,
        error: {
          hasError: false,
          title: '',
          description: '',
        },
      };
    case 'LOGIN_FAILURE':
      return {
        ...state,
        loading: false,
        error: {
          hasError: true,
          title: action.error.message,
          description: action.error,
        },
      };
    case 'SIGNUP_START':
      return {
        ...state,
        loading: true,
        error: {
          hasError: false,
          title: '',
          description: '',
        },
      };
    case 'SIGNUP_SUCCESS':
      return {
        ...state,
        loading: false,
        register: true,
        token: action.token,
        error: {
          hasError: false,
          title: '',
          description: '',
        },
      };
    case 'SIGNUP_FAILURE':
      return {
        ...state,
        loading: false,
        register: false,
        error: {
          hasError: true,
          title: action.error.message,
          description: action.error,
        },
      };
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.payload.token,
      };
    default:
      return state;
  }
}
