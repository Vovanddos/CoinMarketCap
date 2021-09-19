import React, {FC} from 'react';
import classes from "./Select.module.css";

interface SelectProps{
    options: any[],
    defaultValue?:string,
    value?: any,
    onChange?:(e:any)=>void
}

const Select: FC<SelectProps> = ({options, defaultValue, value, onChange}) => {
    return (
        <select className={classes.slt} value={value} onChange={e=>onChange?.(e.target.value)}>
            <option value="" disabled>{defaultValue}</option>
            {
                options.map((option)=>
                    <option key={option.value} value={option.value}>{option.name}</option>
                )
            }
        </select>
    );
};

export default Select;
