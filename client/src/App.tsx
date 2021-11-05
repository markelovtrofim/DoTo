import React from 'react';
import './styles/index.scss';
import {AuthForm} from './components';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login"><AuthForm inputData={[
          {name: "Mail"},
          {name: "Password"}
        ]} nameLink="SignIn" name="LogIn"/></Route>
        <Route path="/signin"><AuthForm inputData={[
          {name: "Mail"},
          {name: "Name"},
          {name: "Password"}
        ]} nameLink="LogIn" name="SignIn"/></Route>
        <Route exact path="/"><Redirect to="/login"/></Route>
        <Route path="*">Error 404</Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;