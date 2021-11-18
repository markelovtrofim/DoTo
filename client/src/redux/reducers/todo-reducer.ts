import {todoAPI} from '../../api/api';


// ACTIONS CONST AND TYPE
const SET_PENDING = 'todo/SET_PENDING';
const SET_TODO_TEXT = 'todo/SET_TODO_TEXT';

type actionType = setPendingType | setTodoTextType;


// INITIAL STATE AND TYPE
export interface initialStateType {
  pending: boolean
  todos: Array<{
    text: string
    completed: boolean
    important: boolean
  }>
}
const initialState: initialStateType = {
  pending: false,
  todos: []
};


// REDUCER
const todoReducer = (state: initialStateType = initialState, action: actionType) => {
  switch (action.type) {
    case SET_TODO_TEXT:
      return {
        ...state,
        todos: [...state.todos, action.todo]
      }
    case SET_PENDING:
      return {
        ...state,
        pending: action.boolean
      }
    default:
      return state;
  }
};


// ACTIONS AND TYPE
interface setPendingType {
  type: typeof SET_PENDING,
  boolean: boolean
}
const setPending = (boolean: boolean): setPendingType => ({type: SET_PENDING, boolean});

interface setTodoTextType {
  type: typeof SET_TODO_TEXT
  todo: string
}
const setTodoText = (todo: any): setTodoTextType => ({type: SET_TODO_TEXT, todo});

// THUNK
export const postNote = (userId: number, text: string) => async (dispatch: any) => {
  dispatch(setPending(true));
  const data = await todoAPI.postNote({userId, text});
  dispatch(setTodoText(data));
  dispatch(setPending(false));
};


export default todoReducer;