import React from 'react';
import './Note.scss';
import CheckIcon from '@mui/icons-material/Check';
import StarIcon from '@mui/icons-material/Star';
import {Delete} from "@mui/icons-material";
import classNames from "classnames";
import NoteBox from "./NoteBox";
import {useDispatch} from "react-redux";
import {deleteNote, completedNote, importantNote} from '../../redux/reducers/todo-reducer'

interface NotePropsType {
  noteId: string
  userId: string
  completed: boolean
  important: boolean
  body: string
}

const Note: React.FC<NotePropsType> = ({body, completed, important, noteId, userId}) => {
  const dispatch = useDispatch();
  return (
    <NoteBox
      // left
      leftIcon={<div onClick={() => {
        dispatch(completedNote(noteId, userId))
      }} className={classNames("note__check__box", {
      "note__check__box__completed": completed
    })}>
        <CheckIcon className={classNames("note__check", {"note__check__completed": completed})}/>
      </div>}
      // right
      rightIcon={[<StarIcon onClick={() => {
        dispatch(importantNote(noteId, userId))
      }} className={classNames("note__important", {"note__important__active": important})}/>, <Delete onClick={() => {
        dispatch(deleteNote(noteId, userId))
      }} className="note__delete"/>]}>

      <span className={classNames("note__text", {"note__text__completed": completed})}>
        {body}
      </span>
    </NoteBox>
  );
};

export default Note;