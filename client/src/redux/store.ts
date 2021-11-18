import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducers/auth-reducer';
import todoReducer from './reducers/todo-reducer';

let rootReducer = combineReducers({
  todo: todoReducer,
  auth: authReducer
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
export type AppDispatch = typeof store.dispatch;

declare global {
  interface Window {
    __store__: any
  }
}

window.__store__ = store;
export default store;