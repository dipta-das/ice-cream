import React from 'react';
import classes from './IceCream.module.css';
import Scoop from './Scoop/Scoop.module.css';

// eslint-disable-next-line import/prefer-default-export
export const IceCream = () => (
    <div>
        <div className={classes.IceCream}>
            <p className={classes.cone} />
            {/* Please start adding scoops */}
            {/* scoop comonent */}
            <Scoop />
            <div className={classes.cherry} />
        </div>
    </div>
);
