import React from 'react';
import './NoteBox.scss';
import classNames from "classnames";

interface NoteBoxPropsType {
  leftIcon: any
  rightIcon: Array<any>
}

const NoteBox: React.FC<NoteBoxPropsType> = ({leftIcon, rightIcon, children}) => {
  return (
    <div className="note--box">
      <div className="note--box__left">
        <div className="note--box__icon__box">
          {leftIcon}
        </div>
        <div className="note--box__body">
          {children}
        </div>
      </div>
      <div className="note--box__right--icon">{rightIcon ? rightIcon.map(icon => icon) : null}</div>
    </div>
  );
};

export default NoteBox;