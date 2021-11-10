import React from 'react';
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import {makeStyles} from "@mui/styles";
import './Button.scss';

interface ButtonPropsType {
  onClick: () => void
  pending: boolean
  inputSuccess?: boolean
}

const Button: React.FC<ButtonPropsType> = ({onClick, pending, inputSuccess,children}) => {
  const useButtonStyles = makeStyles({
    button: {
      color: "#fff !important",
      borderColor: "#fff !important",
    },
  });
  const classes = useButtonStyles();
  return (
    <div className="button">
      <LoadingButton size="large" fullWidth
                     className={pending && classes.button} color="primary" loading={pending} onClick={onClick}
                     loadingPosition="end" variant="contained" endIcon={<SaveIcon/>}>
        {children}
      </LoadingButton>
    </div>
  );
};

export default Button;