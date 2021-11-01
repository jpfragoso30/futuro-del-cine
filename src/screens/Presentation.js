import React from 'react';

import CommonText from '../components/CommonText';

import screenStyles from './styles';

const Presentation = ({...props}) => {
    const classes = screenStyles(props);

    return(
        <div className={classes.screen}>
            <CommonText title='El Cine' subtitle='Juan P. Fragoso O.' body='Y su arte asincrono...' helperText='Analisis del tiempo y el cine.' />
        </div>
    );
};

export default Presentation;