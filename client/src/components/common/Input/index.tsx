import React, {Dispatch} from 'react';
import {TextField} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {authDataType} from "../../AuthForm";

interface InputType {
  name: string
  authData: authDataType
  setAuthData: Dispatch<authDataType>
}

const Input: React.FC<InputType> = ({name, authData, setAuthData}) => {
  const useInputStyles = makeStyles({
    cssFocused: {},
    notchedOutline: {
      borderWidth: '1px',
      borderColor: '#f2f3f4 !important'
    },
    button: {
      color: "#fff !important",
      borderColor: "#fff !important",
    },
  });
  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setAuthData({...authData, [event.target.name]: event.target.value});
  };
  return (
    <TextField autoComplete='off' onChange={inputChangeHandler} name={name.toLowerCase()}
               fullWidth label={name} color="secondary" margin="dense"
               InputProps={{
                 classes: {
                   focused: useInputStyles().cssFocused,
                   notchedOutline: useInputStyles().notchedOutline,
                 },
                 inputMode: "numeric",
                 style: {
                   color: "white"
                 }
               }}
               InputLabelProps={{
                 style: {
                   color: "white"
                 }
               }}/>
  );
};

export default Input;