import React, {useEffect, useState} from 'react';
import {AuthBox, Button, Input, Link, Logo} from "../../components";
import {ErrorType, UserDataType} from "../../types/types";
import {useDispatch, useSelector} from "react-redux";
import {login, setErrors} from "../../redux/auth-reducer";

const Login = () => {
  // @ts-ignore
  useEffect(() => {
    return dispatch(setErrors(null));
  }, []);
  const [userData, collectUserData] = useState<UserDataType>({
    email: '',
    password: ''
  });
  const dispatch = useDispatch();
  const state = useSelector(state => ({
    // @ts-ignore
    errors: state.auth.errors,
    // @ts-ignore
    pending: state.auth.pending, // типизировать
  }))
  const buttonClickHandler = () => {
    dispatch(login(userData))
  };
  const names: any = {
    email: "Email",
    password: "Password"
  };
  return (
    <AuthBox>
      <Logo path="Login"/>
      <h1>Login page</h1>
      <form onSubmit={event => event.preventDefault()}>
        <Input name={names.email} collectUserData={collectUserData} userData={userData} error={state.errors && state.errors.fields[names.email.toLowerCase()]}/>
        <Input name={names.password} collectUserData={collectUserData} userData={userData} error={state.errors && state.errors.fields[names.password.toLowerCase()]}/>
        {state.errors ? state.errors.messages.map((error: ErrorType) => <h3 style={{
          color: "rgb(206,39,39)",
          marginBottom: "20px"
        }}>{error.message}</h3>) : ""}
        <Button onClick={buttonClickHandler} pending={state.pending}>Войти в аккаунт</Button>
        <Link path="/registration" text="Нет аккаунта?">Sign In</Link>
      </form>
    </AuthBox>
  );
};

export default Login;