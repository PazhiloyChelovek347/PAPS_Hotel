import { HOTELS_FAILURE, HOTELS_REQUEST, HOTELS_SUCCESS } from 'src/utils/actions/hotels';
import { ExtendedAction } from '../../types/action';

// {
//   title: '',
//   alternativeTitles: [],
//   group: '',
//   singer: '',
//   level: null,
//   progress: null,
//   tags: [],
//   imgLink: '',
// }

const initialState = {
  loading: false,
  hotels: [],
  error: {
    hasError: false,
    title: '',
    description: '',
  },
};

export default function hotelsReducer(state = initialState, action: ExtendedAction) {
  switch (action.type) {
    case HOTELS_REQUEST:
      return {
        ...state,
        loading: true,
        error: {
          hasError: false,
          title: '',
          description: '',
        },
      };
    case HOTELS_SUCCESS:
      return {
        ...state,
        loading: false,
        // @ts-ignore
        hotels: action.hotels,
        error: {
          hasError: false,
          title: '',
          description: '',
        },
      };
    case HOTELS_FAILURE:
      return {
        ...state,
        loading: false,
        error: {
          hasError: true,
          title: action.error.message,
          description: action.error,
        },
      };
    // case 'SET_TOKEN':
    //   return {
    //     ...state,
    //     token: action.payload.token,
    //   };
    default:
      return state;
  }
}
