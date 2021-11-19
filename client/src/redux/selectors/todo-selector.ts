import {AppStateType} from '../store';

export const getPending = (state: AppStateType) => {
  return state.todo.pending;
};

export const getTodosData = (state: AppStateType) => {
  return state.todo.todos;
};