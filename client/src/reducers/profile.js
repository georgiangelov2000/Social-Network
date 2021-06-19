import {
  GET_PROFILE,
  PROFILE_ERROR,
  CLEAR_PROFILE,
  UPDATE_PROFILE,
  GET_PROFILES,
  FILTER_PROFILES,
  LOGOUT,
  ACCOUNT_DELETED,
} from "../actions/types";

const initialState = {
  profile: null,
  profiles: [],
  error: {},
  filtered:[]
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILE:
    case UPDATE_PROFILE:
      return {
        ...state,
        profile: payload,
      };
    case GET_PROFILES:
      return {
        ...state,
        profiles: payload,
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        profile: null,
      };
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
      };

    case FILTER_PROFILES:
      return {
        ...state,
        filtered: state.profiles.filter((profile) => {
          const regex = new RegExp(`${payload}`);
          return profile.username.match(regex) || profile.email.match(regex);
        }),
      };

    case ACCOUNT_DELETED:
    case CLEAR_PROFILE:
    case LOGOUT:
      return {
        ...state,
        profile: null,
      };
    default:
      return state;
  }
}
