import React from 'react';
import classes from './Item.module.css';
// eslint-disable-next-line import/prefer-default-export
export default function Item() {
    return (
        <li className={classes.item}>
            <span>Vanilla</span>
            <span className={classes.quantity} />
            <div className="right">
                <button type="button" className={[classes.plus, 'rounded'].join(' ')}>
                    +
                </button>
                <button type="button" className={[classes.minus, 'rounded'].join(' ')}>
                    -
                </button>
            </div>
        </li>
    );
}
