import React from 'react';
import {ErrorsType, ErrorType} from "../../types/types";
import './Errors.scss';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';


interface ErrorPropsType {
  errors: ErrorsType | null
}

const Errors: React.FC<ErrorPropsType> = ({errors}) => {
  return (
    <div>
      {errors ?
      <div className="errors">
        <ErrorOutlineIcon color={"error"} fontSize={"medium"}/>
        <div>
          {errors.messages.map((error: ErrorType) => <div className="errors__item">{error.message}</div>)}
        </div>
      </div> : null}
    </div>
  );
};

export default Errors;