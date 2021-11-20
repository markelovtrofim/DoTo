import React from 'react';
import './MainInput.scss';
import NoteBox from "../Note/NoteBox";
import {Create, Add} from '@mui/icons-material';
import {postNote} from "../../redux/reducers/todo-reducer";
import {useDispatch} from "react-redux";

interface MainInputType {
  setNoteData: React.Dispatch<string>
  userData: any
  noteData: any
}

const MainInput: React.FC<MainInputType> = ({setNoteData, userData, noteData}) => {
  const dispatch = useDispatch();
  return (
    <div style={{marginBottom: '30px'}}>
      <NoteBox leftIcon={<Create/>} rightIcon={[<Add style={{cursor: "pointer"}} onClick={() => {
        dispatch(postNote(userData.id, noteData))
      }}/>]}>
        <textarea className="main--input" placeholder="Введите текст..." onChange={(event) => {
          setNoteData(event.target.value)
        }}/>
      </NoteBox>
    </div>
  );
};

export default MainInput;