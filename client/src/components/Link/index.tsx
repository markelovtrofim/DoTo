import React from 'react';
import {NavLink} from "react-router-dom";
import './Link.scss';

interface LinkType {
  text: string
  path: string
}

const Link: React.FC<LinkType> = ({text, path, children}) => {
  return (
    <div className="link">
      <span className="link__text">{text}</span>
      <NavLink className="link__field" to={path}>{children}</NavLink>
    </div>
  );
};

export default Link;