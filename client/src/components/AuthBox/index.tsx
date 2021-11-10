import React from 'react';
import './AuthBox.scss';

interface AuthBoxType {
  children: React.ReactNode
}

const AuthBox = ({children}: AuthBoxType) => {
  return (
    <div className="auth--box">
      <div className="auth--box__container">
        {children}
      </div>
    </div>
  );
};

export default AuthBox;