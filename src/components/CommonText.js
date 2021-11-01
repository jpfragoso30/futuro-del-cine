import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    body:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        position: 'absolute',
        width: 'max-content',
        gap: 0,
        '& *': {
            margin: 0,
        }
    },
});

const CommonText = ({title, subtitle, body, helperText}) => {
    const classes = useStyles();

    return(
        <div className={classes.body}>
            {title && title?.length > 0 ? (<h2>{title}</h2>) : null}
            {subtitle && subtitle?.length > 0 ? (<h3>{subtitle}</h3>) : null}
            {body && body?.length > 0 ? (<p>{body}</p>) : null}
            {helperText && helperText?.length > 0 ? (<small>{helperText}</small>) : null}
        </div>
    );
};

export default CommonText;