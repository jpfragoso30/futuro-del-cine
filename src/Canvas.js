import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
});

const Canvas = () => {
    const classes = useStyles();

    return(
        <div className={classes.canvas}>

        </div>
    );
};

export default Canvas;