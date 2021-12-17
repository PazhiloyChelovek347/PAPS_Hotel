import { TABS_FAILURE, TABS_REQUEST, TABS_SUCCESS } from 'src/utils/actions/tabs';
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
  tabs: [],
  error: {
    hasError: false,
    title: '',
    description: '',
  },
};

export default function tabsReducer(state = initialState, action: ExtendedAction) {
  switch (action.type) {
    case TABS_REQUEST:
      return {
        ...state,
        loading: true,
        error: {
          hasError: false,
          title: '',
          description: '',
        },
      };
    case TABS_SUCCESS:
      return {
        ...state,
        loading: false,
        // @ts-ignore
        tabs: action.tabs,
        error: {
          hasError: false,
          title: '',
          description: '',
        },
      };
    case TABS_FAILURE:
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
