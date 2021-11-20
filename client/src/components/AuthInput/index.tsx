import React, {Dispatch, useState} from 'react';
import './AuthInput.scss';
import {UserDataType} from '../../types/types';
import classNames from "classnames";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

interface InputPropsType {
  name: string
  userData: UserDataType
  collectUserData: Dispatch<UserDataType>
  error: boolean
  pageName: string
}

const Input: React.FC<InputPropsType> = ({name, collectUserData, userData, error, pageName}) => {
  const newName = name.toLowerCase();
  const [inputType, setInputType] = useState(true);
  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    collectUserData({...userData, [event.target.name]: event.target.value});
  };
  return (
    <div className="input">
      <label className={classNames("input__label", {"input__label--error" : error})} htmlFor="input">{name}</label>
      {newName === "password" && pageName === "login" ? <span className="input__helper__box"><button onClick={() => alert("Так вспоминай блять")} className="input__helper">Забыл пароль?</button></span>: null}
      <span onClick={() => setInputType(!inputType)} className="password--eye">{newName === "password" ? inputType ? <VisibilityOffIcon/> : <VisibilityIcon/>  : null}</span>
      <input autoComplete="off" onChange={inputChangeHandler} type={newName === "password" && inputType ? "password" : "type"} name={newName} className={classNames("input__field", {"input__field--error" : error})} placeholder={`Введите ${newName}`}/>
    </div>
  );
};

export default Input;