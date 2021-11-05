import React, {useState} from 'react';
import {Box, Container} from "@mui/material";
import './AuthForm.scss';
import SpaceFon from '../SpaceFon';
import {Button, Input, Logo} from '../common';
import {Link} from 'react-router-dom';

export interface authDataType {
  mail: string | null
  name?: string
  password: string | null
}

interface AuthFormType {
  inputData: Array<{ name: string }>
  name: string
  nameLink: string
}

const AuthForm: React.FC<AuthFormType> = ({inputData, name, nameLink}) => {
  const [authData, setAuthData] = useState<authDataType>({
    mail: null,
    password: null
  });
  const [buttonLoad, setButtonLoad] = useState<boolean>(false);
  const [inputSuccess, setInputSuccess] = useState<boolean>(false);
  const buttonClickHandler = () => {
    setButtonLoad(true);
    // ajax запрос
    setTimeout(() => {
      console.log(authData);
      setButtonLoad(false);
    }, 2000);
    // пока log`a
    setAuthData({
      mail: null,
      password: null
    })
  }
  return (
    <div className="auth--form">
      <SpaceFon/>
      <form className="auth--form__window" onSubmit={e => e.preventDefault()}>
        <Container>
          <div className="auth--form__logo">
            <Logo path={name.toLowerCase()}/>
            <p className="auth--form__logo__text">DoTo</p>
          </div>
          <h1>{name} page</h1>
          <Box
            sx={{
              margin: "0 auto",
              width: 250,
            }}
          >
            {inputData.map(data => <Input inputSuccess={inputSuccess} setInputSuccess={setInputSuccess} name={data.name} authData={authData} setAuthData={setAuthData}/>)}
            <Button buttonClickHandler={buttonClickHandler} buttonLoad={buttonLoad} inputSuccess={inputSuccess}/>
            <div className="auth--form__link--box">
              {name === "LogIn" ?
                <>
                  <p>Нет аккаунт?</p>
                  <Link to={nameLink.toLowerCase()} className="auth--form__link">
                    Зарегистироваться
                  </Link>
                </> :
                <>
                  <p>Есть аккаунт?</p>
                  <Link to={nameLink.toLowerCase()} className="auth--form__link">
                    Войти
                  </Link>
                </>
              }
            </div>
          </Box>
        </Container>
      </form>
    </div>
  );
};

export default AuthForm;