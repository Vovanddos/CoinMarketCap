import React, {FC} from 'react';
import classes from "./Button.module.css";

interface ButtonProps{
    children?:React.ReactChild|React.ReactNode
    props?:any
    onClick?: (e:React.MouseEvent<HTMLButtonElement>)=>void
    disabled?:boolean
}

const Button: FC<ButtonProps> = ({ children,...props}) => {
    return (
        <button {...props} className={classes.btn}>{children}</button>
    );
};

export default Button;
