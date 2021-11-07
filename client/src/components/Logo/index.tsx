import React from 'react';
import {IconButton} from '@mui/material';
import {LogoIcon} from '../../assets/img';
import './Logo.scss';

interface LogoType {
  path: string
}

const Logo: React.FC<LogoType> = ({path}) => {
  return (
    <div className="auth--logo">
      <a href={path.toLowerCase()}>
        <IconButton>
          <img src={LogoIcon} alt="Reload" width={40} height={40}/>
        </IconButton>
      </a>
      <p className="auth--logo__text">DoTo</p>
    </div>
  );
};

export default Logo;