import React, {Dispatch} from 'react';
import './Input.scss';
import {UserDataType} from '../../types/types';
import classNames from "classnames";

interface InputPropsType {
  name: string
  userData: UserDataType
  collectUserData: Dispatch<UserDataType>
  error: boolean
}

const Input: React.FC<InputPropsType> = ({name, collectUserData, userData, error}) => {
  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    collectUserData({...userData, [event.target.name]: event.target.value});
  };
  return (
    <div className="input">
      <label className={classNames("input__label", {"input__label--error" : error})} htmlFor="input">{name}</label>
      <input autoComplete="off" onChange={inputChangeHandler} name={name.toLowerCase()} className={classNames("input__field", {"input__field--error" : error})} type="text" placeholder={`Введите ${name.toLowerCase()}`}/>
    </div>
  );
};

export default Input;