import React, {useState} from 'react';
import {Box, Button, Logo, Note} from '../../components';
import {logout} from '../../redux/reducers/auth-reducer';
import {postNote} from '../../redux/reducers/todo-reducer';
import {useDispatch, useSelector} from 'react-redux';
import './Main.scss';
import CancelIcon from '@mui/icons-material/Cancel';
import PersonIcon from '@mui/icons-material/Person';
import {AppStateType} from "../../redux/store";
import {getPending, getTodos} from "../../redux/selectors/todo-selector";


const notesTestArray = [
  {completed: false, important: false, body: "This is very big note nigga bitch bus"},
  {completed: true, important: false, body: "This is very big note nigga bitch bus"},
  {completed: false, important: true, body: "This is very big note nigga bitch bus"},
  {completed: true, important: true, body: "This is very big note nigga bitch bus"},
];

const Main: React.FC = () => {
  const dispatch = useDispatch();
  const pending = useSelector((state: AppStateType) => getPending(state));
  const todos = useSelector((state: AppStateType) => getTodos(state));
  // @ts-ignore
  const userData = JSON.parse(localStorage.getItem('userData'));
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
            display: 'flex'
          }}>
            <input onChange={(event) => setNoteData(event.target.value)}/>
            <Button onClick={() => {
              dispatch(postNote(userData.userId, noteData))
            }} pending={pending} fullwidth variant="link" size="small">Published</Button>
          </div>
          {todos.map((note: any) => <Note completed={note.completed} important={note.important} body={note.text}/>)}
        </div>
      </div>
    </Box>
  );
};

export default Main;