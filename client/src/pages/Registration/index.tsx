import React, {useState} from 'react';
import {AuthBox, Input} from '../../components';
import {Logo, Button} from "../../components";
import {saveUser, setErrors} from "../../redux/auth-reducer";
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
    dispatch(setErrors(null))
  }
  return (
    <AuthBox>
      <Logo path="Registration"/>
      <h1>Registration page</h1>
      <form onSubmit={event => event.preventDefault()}>
        <Input name="Email" collectUserData={collectUserData} userData={userData}/>
        <Input name="Name" collectUserData={collectUserData} userData={userData}/>
        <Input name="Password" collectUserData={collectUserData} userData={userData}/>
        {state.errors ? state.errors.map((error: ErrorType) => <h3 style={{
          color: "rgb(206,39,39)",
          marginBottom: "20px"
        }}>{error.message}</h3>) : ""}
        <Button onClick={buttonClickHandler} pending={state.pending}>Child</Button>
      </form>
    </AuthBox>
  );
};

export default Registration;