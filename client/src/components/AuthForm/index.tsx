import React, {useState} from 'react';
import {Box, Container, IconButton, TextField} from "@mui/material";
import './AuthForm.scss';
import SpaceFon from '../SpaceFon';
import Logo from '../../assets/img/logo.png';
import {makeStyles} from "@mui/styles";
import {Button, Input} from '../common';

const useInputStyles = makeStyles({
  button: {
    color: "#fff !important",
    borderColor: "#fff !important",
  },
});

const AuthForm = () => {
  const classes = useInputStyles();
  const [load, setLoad] = useState(false);
  return (
    <form className="auth--form">
      <SpaceFon/>
      <div className="auth--form__window">
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
            <Input/>
            <Input/>
            <Button/>
          </Box>
        </Container>
      </div>
    </form>
  );
};

export default AuthForm;