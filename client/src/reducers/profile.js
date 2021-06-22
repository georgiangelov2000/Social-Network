import {
  GET_PROFILE,
  PROFILE_ERROR,
  CLEAR_PROFILE,
  UPDATE_PROFILE,
  GET_PROFILES,
  LOGOUT,
  ACCOUNT_DELETED,
} from "../actions/types";

const initialState = {
  profile: null,
  profiles: [],
  error: {},
  filtered:[],
  loading:true
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILE:
    case UPDATE_PROFILE:
      return {
        ...state,
        profile: payload,
        loading:false,
      };
    case GET_PROFILES:
      return {
        ...state,
        profiles: payload,
        loading:false,
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        profile: null,
        loading:false,
      };
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
      };
    case ACCOUNT_DELETED:
    case CLEAR_PROFILE:
    case LOGOUT:
      return {
        ...state,
        profile: null,
        loading:false,
      };
    default:
      return state;
  }
}
