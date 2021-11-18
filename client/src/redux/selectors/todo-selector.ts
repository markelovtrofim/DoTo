import {AppStateType} from '../store';

export const getPending = (state: AppStateType) => {
  // @ts-ignore
  return state.todo.pending;
};

export const getTodos = (state: AppStateType) => {
  // @ts-ignore
  return state.todo.todos;
};