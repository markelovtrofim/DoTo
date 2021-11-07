import React, {Dispatch} from 'react';
import './Input.scss';
import {UserDataType} from '../../types/types';

interface InputPropsType {
  name: string
  userData: UserDataType
  collectUserData: Dispatch<UserDataType>
}

const Input: React.FC<InputPropsType> = ({name, collectUserData, userData}) => {
  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    collectUserData({...userData, [event.target.name]: event.target.value});
  };
  return (
    <div className="input">
      <label className="input__label" htmlFor="input">{name}</label>
      <input onChange={inputChangeHandler} name={name.toLowerCase()} className="input__field" type="text" placeholder={`Введите ${name.toLowerCase()}`}/>
    </div>
  );
};

export default Input;