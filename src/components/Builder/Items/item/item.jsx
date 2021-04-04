import React from 'react';
import classes from './Item.module.css';
// eslint-disable-next-line import/prefer-default-export
export const item = () => (
    <li className={classes.item}>
        <span>{name}</span>
        {scoopsByCount[name] >= 0 ? (
            <span className={classes.quantity}>{scoopsByCount[name]}</span>
        ) : null}
        <div className="right">
            <button
                onClick={add.bind(this, name)}
                type="button"
                className={[classes.plus, 'rounded'].join(' ')}
            >
                +
            </button>
            <button
                type="button"
                onClick={remove.bind(this, name)}
                className={[classes.minus, 'rounded'].join(' ')}
            >
                -
            </button>
        </div>
    </li>
);
