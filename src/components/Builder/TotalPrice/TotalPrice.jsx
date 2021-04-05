import React from 'react';
import classes from './TotalPrice.module.css';

// eslint-disable-next-line import/prefer-default-export
export default function TotalPrice() {
    return (
        <div className={classes.total}>
            <div>Total Price</div>
            <div>3000.00TK</div>
        </div>
    );
}
