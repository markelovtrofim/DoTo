import React, {useEffect, useState} from 'react';
import {Box, Button, Logo, MainInput, Note} from '../../components';
import {logout} from '../../redux/reducers/auth-reducer';
import {getTodos, postNote} from '../../redux/reducers/todo-reducer';
import {useDispatch, useSelector} from 'react-redux';
import './Main.scss';
import CancelIcon from '@mui/icons-material/Cancel';
import PersonIcon from '@mui/icons-material/Person';
import {AppStateType} from "../../redux/store";
import {getPending, getTodosData} from "../../redux/selectors/todo-selector";

const Main: React.FC = () => {
  const dispatch = useDispatch();
  const pending = useSelector((state: AppStateType) => getPending(state));
  const todos = useSelector((state: AppStateType) => getTodosData(state));
  // @ts-ignore
  const userData = JSON.parse(localStorage.getItem('userData'));
  useEffect(() => {
    dispatch(getTodos(userData.id))
  }, [])
  const [noteData, setNoteData] = useState<string>('');
  return (
    <Box large>
      <div className="main">
        <div className="main__nav">
          <Logo path="/"/>
          <div className="main__name__block">
            <PersonIcon/>
            <p>{userData.name}</p>
          </div>
          <Button fullwidth onClick={() => dispatch(logout())} pending={false} size="medium" variant="outlined" error
                  endIcon={<CancelIcon/>}>Выйти</Button>
        </div>
        <div className="main__content">
          <div style={{
          }}>
            <MainInput setNoteData={setNoteData} userData={userData} noteData={noteData}/>
          </div>
          {todos.map((note: any) => <Note noteId={note._id} userId={note.owner} completed={note.completed} important={note.important} body={note.text}/>)}
        </div>
      </div>
    </Box>
  );
};

export default Main;