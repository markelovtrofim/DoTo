import React, {Dispatch, useState} from 'react';
import {TextField} from "@mui/material";
import {authDataType} from "../../AuthForm";

interface InputType {
  name: string
  authData: authDataType
  setAuthData: Dispatch<authDataType>
  inputSuccess: boolean
  setInputSuccess: Dispatch<boolean>
}

const Input: React.FC<InputType> = ({name, authData, setAuthData, inputSuccess, setInputSuccess}) => {
  let [error, setError] = useState<boolean>(false);

  const emailControl = (email: string): void => {
    let re = /^\S+@\S+\.\S+$/;
    if (re.test(email)) {
      setInputSuccess(true);
      setError(false);
    } else {
      setError(true);
      setInputSuccess(false);
    }
  };
  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setAuthData({...authData, [event.target.name]: event.target.value});
  };
  return (
    <TextField autoComplete='off'
               onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                 inputChangeHandler(event);
                 if (name === "Mail") {
                   emailControl(event.target.value)
                 }
               }}
               name={name.toLowerCase()}
               fullWidth focused label={name} error={error} color={inputSuccess && name === "Mail" ? "success" : "primary"}
               helperText={error ? "Поле почты введено неверно или не введено вообще." : null} margin="dense"
               InputProps={{
                 style: {
                   color: "white"
                 }
               }}
               InputLabelProps={{
                 style: {
                   color: "white"
                 }
               }}
    />
  );
};

export default Input;