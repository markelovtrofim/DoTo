import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import authReducer from "./auth-reducer";

let rootReducer = combineReducers({
  auth: authReducer
})

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

declare global {
  interface Window {
    __store__: any
  }
}
window.__store__ = store
export default store;