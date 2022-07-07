import * as types from "./AuthTypes";

const initialState = {
  loading: false,
  user: null,
  error: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_SUCCESS:
      return {
        ...state,
        loading: true,
      };
    case types.LOGIN:
      return {
        ...state,
        user: action.payload,
      };
    case types.FETCH_ERROR:
      return {
        ...state,
        user: null,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default authReducer;
