import {ErrorType, StatusEnum, UserDataType} from '../types/types';
import {authAPI} from '../api/api';

const SET_PENDING = 'SET_PENDING';
const SET_ERRORS = 'SET_ERRORS';
const SET_IS_AUTH = 'SET_IS_AUTH';

export interface initialStateType {
  errors: {
    fields: {email?: string, name?: string, password?: string}
    messages: Array<ErrorType>
  } | null
  pending: boolean
  isAuth: boolean
}

const initialState: initialStateType = {
  errors: null,
  pending: false,
  isAuth: false
};

type actionType = setPendingType | setErrorsType | setIsAuthType;

const authReducer = (state: initialStateType = initialState, action: actionType) => {
  switch (action.type) {
    case SET_PENDING:
      return {
        ...state,
        pending: action.boolean
      };
    case SET_ERRORS:
      return {
        ...state,
        errors: action.errors
      };
    case SET_IS_AUTH:
      return {
        ...state,
        isAuth: action.boolean
      };
    default:
      return state;
  }
};

interface setPendingType {
  type: typeof SET_PENDING,
  boolean: boolean
}
const setPending = (boolean: boolean): setPendingType => ({type: SET_PENDING, boolean});

interface setErrorsType {
  type: typeof SET_ERRORS,
  errors: any
}
export const setErrors = (errors: any): setErrorsType => ({type: SET_ERRORS, errors});

interface setIsAuthType {
  type: typeof SET_IS_AUTH
  boolean: boolean
}
const setIsAuth = (boolean: boolean): setIsAuthType => ({type: SET_IS_AUTH, boolean: boolean});

export const saveUser = (userData: UserDataType) => async (dispatch: any) => {
  dispatch(setPending(true));
  const data = await authAPI.registration(userData);
  if (data.status === StatusEnum.Success) {
    dispatch(setIsAuth(true));
    // JSON.Stringify()
  }
  if (data.status === StatusEnum.FormatError || data.status === StatusEnum.EmailIsBusy) {
    dispatch(setErrors(data.errors));
  }
  dispatch(setPending(false));
};

export default authReducer;