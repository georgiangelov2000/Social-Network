import {
  GET_PROFILE,
  PROFILE_ERROR,
  CLEAR_PROFILE,
  UPDATE_PROFILE,
  GET_PROFILES,
  LOGOUT,
  ACCOUNT_DELETED,
  FILTER_PROFILES,
  CLEAR_FILTER
} from "../actions/types";

const initialState = {
  profile: null,
  profiles: [],
  filtered: null,
  search: "",
  error: {},
  loading: true,
};

function profileReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILE:
    case UPDATE_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false,
      };
    case GET_PROFILES:
      return {
        ...state,
        profiles: payload,
        loading: false,
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        profile: null,
        loading: false,
      };
    case ACCOUNT_DELETED:
    case CLEAR_PROFILE:
    case LOGOUT:
      return {
        ...state,
        profile: null,
        loading: false,
      };
    case FILTER_PROFILES:
      return {
        ...state,
        filtered: state.profiles.filter((profile) => {
          const regex = new RegExp(`${payload}`, "gi");
          return  profile.user["username"].match(regex) || profile.user["username"].match(regex)
        }),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    default:
      return state;
  }
}

export default profileReducer;
