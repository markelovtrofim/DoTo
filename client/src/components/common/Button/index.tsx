import React from 'react';
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import {makeStyles} from "@mui/styles";

interface ButtonType {
  buttonClickHandler: () => void
  buttonLoad: boolean
  inputSuccess: boolean
}

const Button: React.FC<ButtonType> = ({buttonClickHandler, buttonLoad, inputSuccess}) => {
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
                     className={buttonLoad && classes.button} disabled={!inputSuccess} color="primary" loading={buttonLoad} onClick={buttonClickHandler}
                     loadingPosition="end" variant="contained" endIcon={<SaveIcon/>}>
        Войти в аккаунт
      </LoadingButton>
    </div>
  );
};

export default Button;