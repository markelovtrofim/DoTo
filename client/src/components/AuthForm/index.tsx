import React, {useEffect, Dispatch} from 'react';
import {Box, Button, Input, Link, Logo, Errors} from '../../components';
import {InputNamesType, UserDataType} from '../../types/types';
import {useDispatch, useSelector} from 'react-redux';
import {setErrors} from "../../redux/reducers/auth-reducer";
import {AppStateType} from "../../redux/store";
import {getErrors, getPending} from "../../redux/selectors/auth-selector";

interface AuthFormPropsType {
  pageName: string
  userData: UserDataType
  collectUserData: Dispatch<UserDataType>

  inputNames: Array<InputNamesType>

  buttonClickThunk: any
  buttonIcon: any
  buttonText: string

  linkPath: string
  linkPrevText: string
  linkText: string
}

const AuthForm: React.FC<AuthFormPropsType> = ({pageName, userData,collectUserData,
                                                inputNames, buttonClickThunk, buttonIcon,
                                                buttonText, linkPath, linkPrevText,
                                                linkText}) => {
  const dispatch = useDispatch();
  useEffect((): any => {
    return dispatch(setErrors(null));
  }, [dispatch]);
  const errors = useSelector((state: AppStateType) => getErrors(state));
  const pending = useSelector((state: AppStateType) => getPending(state));
  const buttonClickHandler = () => {
    dispatch(buttonClickThunk(userData))
  };
  return (
    <Box>
      <Logo path={pageName}/>
      <h1>{pageName} page</h1>
      <form onSubmit={event => event.preventDefault()}>
        {inputNames.map((item: InputNamesType) => <Input key={item.id} name={item.field} collectUserData={collectUserData} userData={userData}
                                              pageName={pageName.toLowerCase()}
                                              error={errors && errors.fields[item.field.toLowerCase()]}/>)}
        <Errors errors={errors}/>
        <Button onClick={buttonClickHandler} pending={pending} endIcon={buttonIcon} size="large"
                variant="contained">{buttonText}</Button>
        <Link path={`/${linkPath}`} text={linkPrevText}>{linkText}</Link>
      </form>
    </Box>
  );
};

export default AuthForm;