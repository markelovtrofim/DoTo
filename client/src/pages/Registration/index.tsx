import React, {useState} from 'react';
import {AuthBox, Input} from '../../components';
import {Logo, Button} from "../../components";
import {saveUser} from "../../redux/auth-reducer";
import {useDispatch, useSelector} from "react-redux";
import {ErrorType, UserDataType} from "../../types/types";

const Registration = () => {
  const [userData, collectUserData] = useState<UserDataType>({
    email: '',
    name: '',
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
    dispatch(saveUser(userData));
  }
  const names: UserDataType = {
    email: "Email",
    name: "Name",
    password: "Password"
  };
  return (
    <AuthBox>
      <Logo path="Registration"/>
      <h1>Registration page</h1>
      <form onSubmit={event => event.preventDefault()}>
        <Input name={names.email} collectUserData={collectUserData} userData={userData} error={state.errors && state.errors.fields[names.email.toLowerCase()]}/>
        <Input name={names.name} collectUserData={collectUserData} userData={userData} error={state.errors && state.errors.fields[names.name.toLowerCase()]}/>
        <Input name={names.password} collectUserData={collectUserData} userData={userData} error={state.errors && state.errors.fields[names.password.toLowerCase()]}/>
        {state.errors ? state.errors.messages.map((error: ErrorType) => <h3 style={{
          color: "rgb(206,39,39)",
          marginBottom: "20px"
        }}>{error.message}</h3>) : ""}
        <Button onClick={buttonClickHandler} pending={state.pending}>Child</Button>
      </form>
    </AuthBox>
  );
};

export default Registration;