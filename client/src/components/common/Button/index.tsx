import React, {useState} from 'react';
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import {makeStyles} from "@mui/styles";


const Button = () => {
  const useButtonStyles = makeStyles({
    button: {
      color: "#fff !important",
      borderColor: "#fff !important",
    },
  });
  const [load, setLoad] = useState(false);
  const classes = useButtonStyles();
  return (
    <div>
      <LoadingButton size="large" fullWidth className={load && classes.button}
                     disable={false} color="primary" loading={load} onClick={() => setLoad(!load)}
                     loadingPosition="end" variant="contained" endIcon={<SaveIcon/>}>
        Войти в аккаунт
      </LoadingButton>
    </div>
  );
};

export default Button;