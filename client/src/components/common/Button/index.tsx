import React from 'react';
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import {makeStyles} from "@mui/styles";

interface ButtonType {
  buttonClickHandler: () => void
  buttonLoad: boolean
}

const Button: React.FC<ButtonType> = ({buttonClickHandler, buttonLoad}) => {
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
        // @ts-ignore
                     className={buttonLoad && classes.button} color="primary" loading={buttonLoad} onClick={buttonClickHandler}
                     loadingPosition="end" variant="contained" endIcon={<SaveIcon/>}>
        Войти в аккаунт
      </LoadingButton>
    </div>
  );
};

export default Button;