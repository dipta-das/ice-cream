import React from 'react';
import classes from './IceCream.module.css';
import Scoop from './Scoop/Scoop';

// eslint-disable-next-line import/prefer-default-export
export default function IceCream() {
    return (
        <div>
            <div className={classes.IceCream}>
                <p className={classes.cone} />
                <Scoop />
                <div className={classes.cherry} />
            </div>
        </div>
    );
}
