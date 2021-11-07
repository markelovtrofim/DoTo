import {ErrorType} from '../types/types';
import {authAPI} from '../api/api';

const SET_PENDING = 'SET_PENDING';

export interface initialStateType {
  errors: Array<ErrorType> | null
  pending: boolean
}
type actionType = setPendingType;

const initialState: initialStateType = {
  errors: null,
  pending: false
};

export const RegistrationReducer = (state: initialStateType = initialState, action: actionType) => {
  switch (action.type) {
    case SET_PENDING: {
      return {
        ...state,
        pending: action.boolean
      };
    }
  }
};

interface setPendingType {
  type: typeof SET_PENDING,
  boolean: boolean
}
const setPending = (boolean: boolean): setPendingType => ({type: SET_PENDING, boolean});

export const saveUser = (email: string, name: string, password: string) => async(dispatch: any) => {
  dispatch(setPending(true));
  await authAPI.registration(email, name, password);
  dispatch(setPending(false));
};