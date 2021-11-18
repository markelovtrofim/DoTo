import {ErrorsType, StatusEnum, UserDataType} from '../../types/types';
import {authAPI} from '../../api/api';


// ACTIONS: CONST AND TYPE
const SET_PENDING = 'auth/SET_PENDING';
const SET_ERRORS = 'auth/SET_ERRORS';
const SET_IS_AUTH = 'auth/SET_IS_AUTH';

type actionType = setPendingType | setErrorsType | setIsAuthType;


// INITIAL: STATE AND TYPE
export interface initialStateType {
  errors: ErrorsType | null
  pending: boolean
  isAuth: boolean
}

const initialState: initialStateType = {
  errors: null,
  pending: false,
  isAuth: false
};


// REDUCER: FUNCTION
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


// ACTIONS: FUNCTION AND TYPE
interface setPendingType {
  type: typeof SET_PENDING,
  boolean: boolean
}
const setPending = (boolean: boolean): setPendingType => ({type: SET_PENDING, boolean});

export interface setErrorsType {
  type: typeof SET_ERRORS,
  errors: any
}
export const setErrors = (errors: any): setErrorsType => ({type: SET_ERRORS, errors});

interface setIsAuthType {
  type: typeof SET_IS_AUTH
  boolean: boolean
}
export const setIsAuth = (boolean: boolean): setIsAuthType => ({type: SET_IS_AUTH, boolean: boolean});


// THUNK: FUNCTION AND TYPE: null
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

export const login = (userData: UserDataType) => async (dispatch: any) => {
  dispatch(setPending(true));
  const data = await authAPI.login(userData);
  if (data.status === StatusEnum.Success) {
    localStorage.setItem('userData', JSON.stringify({
      name: data.payload.name,
      id: data.payload.userId,
      token: data.payload.token
    })); // так вроде нельзя, поправить.
    dispatch(setIsAuth(true));
  } else if (data.status === StatusEnum.FormatError || data.status === StatusEnum.EmailIsBusy) {
    dispatch(setErrors(data.errors));
  }
  dispatch(setPending(false));
};

export const logout = () => async (dispatch: any) => {
  localStorage.removeItem('userData');
  dispatch(setIsAuth(false));
};


export default authReducer;