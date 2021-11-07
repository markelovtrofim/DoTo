import React from 'react';
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import {makeStyles} from "@mui/styles";

interface ButtonPropsType {
  onClick: () => void
  pending: boolean
  inputSuccess?: boolean
}

const Button: React.FC<ButtonPropsType> = ({onClick, pending, inputSuccess}) => {
  const useButtonStyles = makeStyles({
    button: {
      color: "#fff !important",
      borderColor: "#fff !important",
    },
  });
  const classes = useButtonStyles();
  return (
    <div>
      <LoadingButton size="large" fullWidth
                     className={pending && classes.button} color="primary" loading={pending} onClick={onClick}
                     loadingPosition="end" variant="contained" endIcon={<SaveIcon/>}>
        Войти в аккаунт
      </LoadingButton>
    </div>
  );
};

export default Button;