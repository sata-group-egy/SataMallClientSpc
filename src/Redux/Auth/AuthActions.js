import * as types from "./AuthTypes";

export const fetchSuccess = () => {
  return {
    type: types.FETCH_SUCCESS,
  };
};

export const fetchError = (error) => {
  return {
    type: types.FETCH_ERROR,
    payload: error,
  };
};

export const login = (data) => {
  return {
    type: types.LOGIN,
    payload: data,
  };
};
