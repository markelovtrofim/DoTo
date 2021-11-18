import React from 'react';
import './Note.scss';
import CheckIcon from '@mui/icons-material/Check';
import StarIcon from '@mui/icons-material/Star';
import classNames from "classnames";
import NoteBox from "./NoteBox";

interface NotePropsType {
  completed: boolean
  important: boolean
  body: string
}

const Note: React.FC<NotePropsType> = ({body, completed, important}) => {
  return (
    <NoteBox leftIcon={<div className={classNames("note__check__box", {
      "note__check__box__completed": completed
    })}><CheckIcon className={classNames("note__check", {
      "note__check__completed": completed
    })}/></div>}
             rightIcon={<StarIcon className={classNames("note__important", {"note__important__active": important})}/>}>
      <span className={classNames("note__text", {
        "note__text__completed": completed
      })}>{body}</span>
    </NoteBox>
  );
};

export default Note;