import React from 'react';
import IceCreamBuilder from '../../containers/IceCreamBuilder/IceCreamBuilder';
import classes from './Body.module.css';

// eslint-disable-next-line import/prefer-default-export
export default function Body() {
    return (
        <div className={classes.mainBody}>
            <IceCreamBuilder />
        </div>
    );
}
