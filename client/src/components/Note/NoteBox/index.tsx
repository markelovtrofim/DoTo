import React from 'react';
import './NoteBox.scss';
import classNames from "classnames";

interface NoteBoxPropsType {
  leftIcon: any
  rightIcon?: any
}

const NoteBox: React.FC<NoteBoxPropsType> = ({leftIcon, rightIcon, children}) => {
  return (
    <div className="note--box">
      <div className="note--box__left">
        <div className="note-box__icon__box">
          {leftIcon}
        </div>
        {children}
      </div>
      <div className={classNames("note-box__icon__box", "note-box__right--icon")}>{rightIcon}</div>
    </div>
  );
};

export default NoteBox;