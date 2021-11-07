import React from 'react';
import './styles/index.scss';
import {Redirect, Route, Switch} from 'react-router-dom';
import {Registration} from './pages';
import {useSelector} from "react-redux";

const App = () => {
  const state = useSelector(state => ({
    // @ts-ignore
    isAuth: state.auth.isAuth
  }));
  return (
    <Switch>
      <Route path="/login">Login</Route>
      <Route path="/registration">{!state.isAuth ? <Registration/> : <Redirect to="/"/>}</Route>
      <Route exact path="/">{state.isAuth ? <h1>Main Page</h1> : <Redirect to="registration"/>}</Route>
      <Route path="*">Error 404</Route>
    </Switch>
  );
};

export default App;