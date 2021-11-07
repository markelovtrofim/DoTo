import React from 'react';
import './AuthBox.scss';
import {SpaceFon} from "../index";

interface AuthBoxType {
  children: React.ReactNode
}

const AuthBox = ({children}: AuthBoxType) => {
  return (
    <div className="auth--box">
      <SpaceFon/>
      <div className="auth--box__window">
        {children}
      </div>
    </div>
  )
};

export default AuthBox;