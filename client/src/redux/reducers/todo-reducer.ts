import {todoAPI} from '../../api/api';


// ACTIONS CONST AND TYPE
const SET_PENDING = 'todo/SET_PENDING';
const SET_TODO_ARRAY = 'todo/SET_TODO';
const SET_TODO_OBJECT = 'todo/SET_TODO_OBJECT';

type actionType = setPendingType | setTodoArrayType | setTodoObjectType;


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
    case SET_TODO_ARRAY:
      return {
        ...state,
        todos: action.todo.reverse()
      }
    case SET_TODO_OBJECT:
      return {
        ...state,
        todos: [action.todo, ...state.todos]
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

interface setTodoArrayType {
  type: typeof SET_TODO_ARRAY
  todo: any
}
const setTodoArray = (todo: Array<any>): setTodoArrayType => ({type: SET_TODO_ARRAY, todo});

interface setTodoObjectType {
  type: typeof SET_TODO_OBJECT
  todo: any
}
const setTodoObject = (todo: any): setTodoObjectType => ({type: SET_TODO_OBJECT, todo});


// THUNK
export const getTodos = (userId: string) => async (dispatch: any) => {
  dispatch(setPending(true));
  const todos = await todoAPI.getTodos(userId);
  dispatch(setTodoArray(todos));
  dispatch(setPending(false));
}

export const postNote = (userId: string, text: string) => async (dispatch: any) => {
  dispatch(setPending(true));
  const data = await todoAPI.postNote({userId, text});
  dispatch(setTodoObject(data));
  dispatch(setPending(false));
};

export const deleteNote = (noteId: string, userId: string) => async (dispatch: any) => {
  await todoAPI.deleteNote(noteId);
  dispatch(getTodos(userId));
}

export const completedNote = (noteId: string, userId: string) => async (dispatch: any) => {
  const todo = await todoAPI.completedNote(noteId);
  dispatch(getTodos(userId));
}

export const importantNote = (noteId: string, userId: string) => async (dispatch: any) => {
  await todoAPI.importantNote(noteId);
  dispatch(getTodos(userId));
}

export default todoReducer;