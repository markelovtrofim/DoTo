import React from 'react';
import LoadingButton from "@mui/lab/LoadingButton";
import {makeStyles} from "@mui/styles";
import './Button.scss';

interface ButtonPropsType {
  onClick: () => void
  pending: boolean
  variant: string
  size: string
  endIcon?: any
  fullwidth?: boolean
  error?: boolean
}

const Button: React.FC<ButtonPropsType> = ({onClick, pending,children, variant, size, endIcon, fullwidth, error}) => {
  const useButtonStyles = makeStyles({
    button: {
      color: "#fff !important",
      borderColor: "#fff !important",
    },
  });
  const classes = useButtonStyles();
  return (
    <div className="button">
      <LoadingButton size={size ? size: "large"} fullWidth={!fullwidth}
                     className={pending && classes.button} color={error ? "error" :"primary"} loading={pending} onClick={onClick}
                     loadingPosition="end" variant={variant ? variant : "contained"} endIcon={endIcon ? endIcon : null}>
        {children}
      </LoadingButton>
    </div>
  );
};

export default Button;