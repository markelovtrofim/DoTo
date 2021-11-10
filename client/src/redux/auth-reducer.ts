import {ErrorType, LoginDataType, StatusEnum, UserDataType} from '../types/types';
import {authAPI} from '../api/api';

const SET_PENDING = 'SET_PENDING';
const SET_ERRORS = 'SET_ERRORS';
const SET_IS_AUTH = 'SET_IS_AUTH';
const SET_LOGIN_DATA = 'SET_LOGIN_DATA';

export interface initialStateType {
  payload: {
    token: string | null
    id: string | null
    name: string | null
  }
  errors: {
    fields: {email?: string, name?: string, password?: string}
    messages: Array<ErrorType>
  } | null
  pending: boolean
  isAuth: boolean
}

const initialState: initialStateType = {
  payload: {
    token: null,
    id: null,
    name: null,
  },
  errors: null,
  pending: false,
  isAuth: false
};

type actionType = setPendingType | setErrorsType | setIsAuthType | setLoginDataType;

const authReducer = (state: initialStateType = initialState, action: actionType) => {
  switch (action.type) {
    case SET_LOGIN_DATA:
      return {
        ...state,
        payload: action.userData
      }
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

// ACTIONS AND ACTIONS-TYPE
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
export const setIsAuth = (boolean: boolean): setIsAuthType => ({type: SET_IS_AUTH, boolean: boolean});

interface setLoginDataType {
  type: typeof SET_LOGIN_DATA
  userData: LoginDataType
}
const setLoginData = (userData: LoginDataType): setLoginDataType => ({type: SET_LOGIN_DATA, userData});

// THUNK
export const login = (userData: UserDataType) => async(dispatch: any) => {
  dispatch(setPending(true));
  const data = await authAPI.login(userData);
  if (data.status === StatusEnum.Success) {
    dispatch(setLoginData(data.payload));
    localStorage.setItem('userData', JSON.stringify({
      name: data.payload.name,
      id: data.payload.userId,
      token: data.payload.token
    }));
    dispatch(setIsAuth(true))
  } else if (data.status === StatusEnum.FormatError || data.status === StatusEnum.EmailIsBusy) {
    dispatch(setErrors(data.errors));
  }
  dispatch(setPending(false));
};

export const saveUser = (userData: UserDataType) => async (dispatch: any) => {
  dispatch(setPending(true));
  const data = await authAPI.registration(userData);
  if (data.status === StatusEnum.Success) {
    dispatch(login({email: userData.email, password: userData.password}));
  } else if (data.status === StatusEnum.FormatError || data.status === StatusEnum.EmailIsBusy) {
    dispatch(setErrors(data.errors));
    dispatch(setPending(false));
  }
};

export default authReducer;