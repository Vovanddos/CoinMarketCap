import React, {FC} from 'react';
import classes from "./Loader.module.css";

interface LoaderProps{
    small?:boolean
}

const Loader: FC<LoaderProps> =({small})=> {

    return (
        <div className={small?`${classes.cubes} ${classes.cubesSmall}`:`${classes.cubes}`}>
            <div className={`${classes.skCube} ${classes.skCube1}`}/>
            <div className={`${classes.skCube} ${classes.skCube2}`}/>
            <div className={`${classes.skCube} ${classes.skCube3}`}/>
            <div className={`${classes.skCube} ${classes.skCube4}`}/>
            <div className={`${classes.skCube} ${classes.skCube5}`}/>
            <div className={`${classes.skCube} ${classes.skCube6}`}/>
            <div className={`${classes.skCube} ${classes.skCube7}`}/>
            <div className={`${classes.skCube} ${classes.skCube8}`}/>
            <div className={`${classes.skCube} ${classes.skCube9}`}/>
        </div>

    );
};

export default Loader;
