import React from 'react';
import classes from './Scoop.module.css';

// eslint-disable-next-line import/prefer-default-export
export default function Scoop() {
    return <div className={[classes.scoop, classes.orance].join(' ')} />;
}
