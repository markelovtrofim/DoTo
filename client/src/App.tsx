import React, {useEffect} from 'react';
import './styles/index.scss';
import {Redirect, Route, Switch} from 'react-router-dom';
import {Login, Registration} from './pages';
import {useDispatch, useSelector} from "react-redux";
import {AuthBox, SpaceFon} from "./components";
import {setIsAuth} from "./redux/auth-reducer";

const App = () => {
  const state = useSelector(state => ({
    // @ts-ignore
    isAuth: state.auth.isAuth,
    // @ts-ignore
    userName: state.auth.payload.name
  }));
  const dispatch = useDispatch();
  useEffect(() => {
    // @ts-ignore
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData && userData.token) {
      dispatch(setIsAuth(true))
    }
  }, [])
  // @ts-ignore
  const userData = JSON.parse(localStorage.getItem('userData'));
  return (
    <div className="wrapper">
      <SpaceFon/>
      <Switch>
        <Route path="/login">{!state.isAuth ? <Login/> : <Redirect to="/"/>}</Route>
        <Route path="/registration">{!state.isAuth ? <Registration/> : <Redirect to="/"/>}</Route>
        <Route exact path="/">{state.isAuth ?
          <AuthBox>
            <div>
              Привет {userData.name}
            </div>
          </AuthBox> : <Redirect to="login"/>}</Route>
        <Route path="*">
          <AuthBox>
            <div style={{
              color: 'rgb(210, 0, 0)',
              fontSize: '26px'
            }}>
              Error 404. Page not found.
            </div>
          </AuthBox>
        </Route>
      </Switch>
    </div>
  );
};

export default App;