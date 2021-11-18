import React, {useState} from 'react';
import {InputNamesType, UserDataType} from '../../types/types';
import {login} from '../../redux/reducers/auth-reducer';
import {AuthForm} from '../../components';
import SendIcon from '@mui/icons-material/Send';

const Login: React.FC = (props) => {
  const [userData, collectUserData] = useState<UserDataType>({
    email: '',
    password: ''
  });
  const inputNames: Array<InputNamesType> = [
    {id: 1, field: 'Email'},
    {id: 2, field: 'Password'}
  ];
  return (
    <AuthForm pageName={"Login"} userData={userData} collectUserData={collectUserData} inputNames={inputNames}
              buttonClickThunk={login} buttonIcon={<SendIcon/>} buttonText={"Войти в аккаунт"} linkPath={"registration"}
              linkPrevText={"Нет аккаунта?"} linkText={"Sign In"}/>
  );
};

export default Login;