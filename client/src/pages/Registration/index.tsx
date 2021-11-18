import React, {useState} from 'react';
import {AuthForm} from '../../components';
import {saveUser} from '../../redux/reducers/auth-reducer';
import {InputNamesType, UserDataType} from '../../types/types';
import SaveIcon from "@mui/icons-material/Save";

const Registration: React.FC = (props) => {
  const [userData, collectUserData] = useState<UserDataType>({
    email: '',
    name: '',
    password: ''
  });
  const inputNames: Array<InputNamesType> = [
    {id: 1, field: 'Email'},
    {id: 2, field: 'Name'},
    {id: 3, field: 'Password'}
  ];
  return (
    <AuthForm pageName={"Registration"} userData={userData} collectUserData={collectUserData} inputNames={inputNames}
              buttonClickThunk={saveUser} buttonIcon={<SaveIcon/>} buttonText={"Зарегистрироваться"} linkPath={"login"}
              linkPrevText={"Уже есть аккаунт?"} linkText={"Log In"}/>
  );
};

export default Registration;