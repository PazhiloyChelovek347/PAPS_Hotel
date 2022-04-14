import {
  BOOKINGS_SETUP_SUCCESS,
  BOOKINGS_SET_FAILURE,
  BOOKINGS_SET_REQUEST,
  BOOKINGS_SET_SUCCESS,
  HOTELS_ADD_FAILURE,
  HOTELS_ADD_REQUEST,
  HOTELS_ADD_SUCCESS,
  HOTELS_DELETE_FAILURE,
  HOTELS_DELETE_REQUEST,
  HOTELS_DELETE_SUCCESS,
  HOTELS_EDIT_FAILURE,
  HOTELS_EDIT_REQUEST,
  HOTELS_EDIT_SUCCESS,
  HOTELS_FAILURE,
  HOTELS_REQUEST,
  HOTELS_SUCCESS,
  SET_HOTEL_MODAL,
} from 'src/utils/actions/hotels';
import { ExtendedAction } from '../../types/action';

const initialState = {
  loading: false,
  usersWithBookings: [],
  // @ts-ignore
  hotels: JSON.parse(localStorage.getItem('Hotels')),
  hotelModalData: {
    open: false,
  },
  error: {
    hasError: false,
    title: '',
    description: '',
  },
};

export default function hotelsReducer(state = initialState, action: any) {
  switch (action.type) {
    case BOOKINGS_SET_REQUEST:
    case HOTELS_ADD_REQUEST:
    case HOTELS_EDIT_REQUEST:
    case HOTELS_DELETE_REQUEST:
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
    case HOTELS_ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        // @ts-ignore
        hotels: [...state.hotels, action.hotel],
        error: {
          hasError: false,
          title: '',
          description: '',
        },
      };
    case HOTELS_EDIT_SUCCESS:
      return {
        ...state,
        loading: false,
        // @ts-ignore
        hotels: [
          ...state.hotels.filter((hotel: any) => hotel.id !== action.hotel.id),
          action.hotel,
        ],
        error: {
          hasError: false,
          title: '',
          description: '',
        },
      };
    case HOTELS_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        // @ts-ignore
        hotels: [...state.hotels.filter((hotel) => hotel.id !== action.id)],
        error: {
          hasError: false,
          title: '',
          description: '',
        },
      };
    case SET_HOTEL_MODAL:
      return {
        ...state,
        loading: false,
        // @ts-ignore
        hotelModalData: {
          ...action.payload,
        },
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
    case BOOKINGS_SET_SUCCESS:
      return {
        ...state,
        Users: action.users,
        user: action.newUser,
        loading: false,
        error: {
          hasError: false,
          title: '',
          description: '',
        },
      };
    case BOOKINGS_SETUP_SUCCESS:
      return {
        ...state,
        usersWithBookings: (() => {
          const bookingAndHotelArray: any[] = [];
          // @ts-ignore
          JSON.parse(localStorage.getItem('Users'))
            .filter((u: any) => u?.bookings.length > 0)
            .forEach((cu: any) => {
              cu.bookings.forEach((booking: any) => {
                bookingAndHotelArray.push({
                  ...state.hotels.find(
                    (hotel: any) => hotel.id === booking.hotel,
                  ),
                  ...booking,
                  user: cu,
                });
              });
            });
          return bookingAndHotelArray;
        })(),
        loading: false,
        error: {
          hasError: false,
          title: '',
          description: '',
        },
      };
    case BOOKINGS_SET_FAILURE:
    case HOTELS_ADD_FAILURE:
    case HOTELS_EDIT_FAILURE:
    case HOTELS_DELETE_FAILURE:
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
    default:
      return state;
  }
}
