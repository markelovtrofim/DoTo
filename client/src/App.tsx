import React from 'react';
import './styles/index.scss';
import {AuthForm} from './components';
import {BrowserRouter, Route} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/sign"><AuthForm/></Route>
    </BrowserRouter>
  );
};

export default App;