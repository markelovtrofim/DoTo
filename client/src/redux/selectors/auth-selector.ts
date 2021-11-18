import {AppStateType} from '../store';

export const getErrors = (state: AppStateType) => {
  return state.auth.errors;
};

export const getPending = (state: AppStateType) => {
  return state.auth.pending;
};

export const getIsAuth = (state: AppStateType) => {
  return state.auth.isAuth;
};