import React, {useEffect} from 'react';
import './styles/index.scss';
import {Redirect, Route, Switch} from 'react-router-dom';
import {Login, Registration} from './pages';
import {useDispatch, useSelector} from 'react-redux';
import {Box, SpaceFon} from './components';
import {setIsAuth} from './redux/reducers/auth-reducer';
import {AppStateType} from './redux/store';
import {getIsAuth} from './redux/selectors/auth-selector';
import Main from "./pages/Main";

const App: React.FC = () => {
  const isAuth = useSelector((state: AppStateType) => getIsAuth(state));
  const dispatch = useDispatch();
  useEffect(() => {
    // @ts-ignore
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData && userData.token) {
      dispatch(setIsAuth(true))
    }
  }, [dispatch])
  return (
    <div className="wrapper">
      <SpaceFon/>
      <Switch>
        <Route path="/login">{!isAuth ? <Login/> : <Redirect to="/"/>}</Route>
        <Route path="/registration">{!isAuth ? <Registration/> : <Redirect to="/"/>}</Route>
        <Route exact path="/">{isAuth ? <Main /> : <Redirect to="login"/>}</Route>
        <Route path="*">
          <Box>
            <div style={{
              color: 'rgb(210, 0, 0)',
              fontSize: '26px'
            }}>
              Error 404. Page not found.
            </div>
          </Box>
        </Route>
      </Switch>
    </div>
  );
};

export default App;