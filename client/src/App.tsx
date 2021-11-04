import React from 'react';
import './styles/index.scss';
import {AuthForm} from './components';
import {BrowserRouter, Route} from "react-router-dom";
import {makeStyles} from "@mui/styles";
import {TextField} from '@mui/material';

const useStyles = makeStyles(() => ({
  input: {
    color: "#FFF",
  },
}));

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/auth"><AuthForm/></Route>
      <TextField
        inputProps={{ className: useStyles().input }}
        id="outlined-basic"
        label="Write something..."
        variant="outlined"
      />
    </BrowserRouter>
  );
};

export default App;