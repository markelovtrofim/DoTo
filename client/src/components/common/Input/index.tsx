import React from 'react';
import {TextField} from "@mui/material";
import {makeStyles} from "@mui/styles";

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

const Input = () => {
  return (
    <TextField fullWidth label="Login" color="secondary" margin="dense" InputProps={{
      classes: {
        focused: useInputStyles().cssFocused,
        notchedOutline: useInputStyles().notchedOutline,
      },
      inputMode: "numeric",
      style: {
        color: "white"
      }
    }} InputLabelProps={{
      style: {
        color: "white"
      }
    }}/>
  );
};

export default Input;