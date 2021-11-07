import React from 'react';
// import {Box, Container} from '@mui/material';
// import './AuthForm.scss';
// import SpaceFon from '../SpaceFon';
// import {Button, Input, Logo} from '../index';
// import {Link} from 'react-router-dom';
// import axios from 'axios';
//
// import React, {Dispatch, useState} from 'react';
// import {TextField} from "@mui/material";
// import {authDataType} from "../../AuthForm";
//
// interface InputType {
//   name: string
//   authData: authDataType
//   setAuthData: Dispatch<authDataType>
//   inputSuccess: boolean
//   setInputSuccess: Dispatch<boolean>
// }
//
// const Input: React.FC<InputType> = ({name, authData, setAuthData, inputSuccess, setInputSuccess}) => {
//   let [error, setError] = useState<boolean>(false);
//
//   const emailControl = (email: string): void => {
//     let re = /^\S+@\S+\.\S+$/;
//     if (re.test(email)) {
//       setInputSuccess(true);
//       setError(false);
//     } else {
//       setError(true);
//       setInputSuccess(false);
//     }
//   };
//   const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
//     setAuthData({...authData, [event.target.name]: event.target.value});
//   };
//   return (
//     <TextField autoComplete='off'
//                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
//                  inputChangeHandler(event);
//                  if (name === "Mail") {
//                    emailControl(event.target.value)
//                  }
//                }}
//                name={name.toLowerCase()}
//                fullWidth focused label={name} error={error} color={inputSuccess && name === "Mail" ? "success" : "primary"}
//                helperText={error ? "Поле почты введено неверно или не введено вообще." : null} margin="dense"
//                InputProps={{
//                  style: {
//                    color: "white"
//                  }
//                }}
//                InputLabelProps={{
//                  style: {
//                    color: "white"
//                  }
//                }}
//     />
//   );
// };
//
//
// export interface authDataType {
//   mail: string | null
//   name?: string
//   password: string | null
// }
//
// interface AuthFormType {
//   inputData: Array<{ name: string }>
//   name: string
//   nameLink: string
// }
// // ajax, data, name, link,
// const AuthForm: React.FC<AuthFormType> = ({inputData, name, nameLink}) => {
//   const [authData, setAuthData] = useState<authDataType>({
//     mail: null,
//     password: null
//   });
//   const [buttonLoad, setButtonLoad] = useState<boolean>(false);
//   const [inputSuccess, setInputSuccess] = useState<boolean>(false);
//   const buttonClickHandler = async () => {
//     setButtonLoad(true);
//     // ajax запрос
//     const response = await axios.post("http://localhost:5000/api/auth/registration", {
//       email: authData.mail,
//       name: authData.name,
//       password: authData.password
//     })
//     console.log(response.data);
//     setButtonLoad(false);
//     setAuthData({
//       mail: null,
//       password: null
//     })
//   }
//   return (
//     <div className="auth--form">
//       <SpaceFon/>
//       <form className="auth--form__window" onSubmit={e => e.preventDefault()}>
//         <Container>
//           <div className="auth--form__logo">
//             <Logo path={name.toLowerCase()}/>
//             <p className="auth--form__logo__text">DoTo</p>
//           </div>
//           <h1>{name} page</h1>
//           <Box
//             sx={{
//               margin: "0 auto",
//               width: 250,
//             }}
//           >
//             {inputData.map(data => <Input inputSuccess={inputSuccess} setInputSuccess={setInputSuccess} name={data.name}
//                                           authData={authData} setAuthData={setAuthData}/>)}
//             <Button buttonClickHandler={buttonClickHandler} buttonLoad={buttonLoad} inputSuccess={inputSuccess}/>
//             <div className="auth--form__link--box">
//               {name === "LogIn" ?
//                 <>
//                   <p>Нет аккаунт?</p>
//                   <Link to={nameLink.toLowerCase()} className="auth--form__link">
//                     Зарегистироваться
//                   </Link>
//                 </> :
//                 <>
//                   <p>Есть аккаунт?</p>
//                   <Link to={nameLink.toLowerCase()} className="auth--form__link">
//                     Войти
//                   </Link>
//                 </>
//               }
//             </div>
//           </Box>
//         </Container>
//       </form>
//     </div>
//   );
// };
//
//
// export default AuthForm;