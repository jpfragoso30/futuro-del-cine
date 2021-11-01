import React from 'react';
import { createUseStyles } from 'react-jss';

import screens from './screens';

const useStyles = createUseStyles({
    canvas: {
        position: 'relative',
        fontSize: 16,
        fontFamily: 'arial',
    },
});

const Canvas = () => {
    const classes = useStyles();

    return(
        <div className={classes.canvas}>
            {screens[0]}
        </div>
    );
};

export default Canvas;