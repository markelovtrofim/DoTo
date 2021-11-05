import React, {useState} from 'react';
import {Box, Container, IconButton} from "@mui/material";
import './AuthForm.scss';
import SpaceFon from '../SpaceFon';
import Logo from '../../assets/img/logo.png';
import {Button, Input} from '../common';

export interface authDataType {
  email: string | null
  password: string | null
}

const AuthForm = () => {
  const [authData, setAuthData] = useState<authDataType>({
    email: null,
    password: null
  })
  const [buttonLoad, setButtonLoad] = useState<boolean>(false);
  const buttonClickHandler = () => {
    setButtonLoad(true);
    // ajax запрос
     setTimeout(() => {
       console.log(authData);
       setButtonLoad(false);
     }, 2000);
    // пока log`a
  }
  return (
    <div className="auth--form">
      <SpaceFon/>
      <form className="auth--form__window" onSubmit={e => e.preventDefault()}>
        <div className="auth--form__logo">
          <IconButton>
            <img src={Logo} alt="Reload" width={40} height={40}/>
          </IconButton>
          <p className="auth--form__logo__text">DoTo</p>
        </div>
        <Container>
          <Box
            sx={{
              margin: "0 auto",
              width: 250,
            }}
          >
            <Input name="Email" authData={authData} setAuthData={setAuthData}/>
            <Input name="Password" authData={authData} setAuthData={setAuthData}/>
            <Button buttonClickHandler={buttonClickHandler} buttonLoad={buttonLoad}/>
          </Box>
        </Container>
      </form>
    </div>
  );
};

export default AuthForm;