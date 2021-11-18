import React from 'react';
import './Box.scss';
import classNames from 'classnames';

interface BoxType {
  children: React.ReactNode
  large?: boolean
}

const Box = ({children, large}: BoxType) => {
  return (
    <div className={classNames({"box--large": large}, "box")}>
      <div className={classNames({"box--large__container": large}, "box__container")}>
        {children}
      </div>
    </div>
  );
};

export default Box;