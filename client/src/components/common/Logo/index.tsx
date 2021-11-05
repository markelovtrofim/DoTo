import React from 'react';
import {IconButton} from "@mui/material";
import {LogoIcon} from '../../../assets/img';

const Logo: React.FC<{path: string}> = ({path}) => {
  return (
    <a href={path}>
      <IconButton>
        <img src={LogoIcon} alt="Reload" width={40} height={40}/>
      </IconButton>
    </a>
  );
};

export default Logo;