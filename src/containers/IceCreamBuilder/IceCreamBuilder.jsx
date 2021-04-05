import React, { Component } from 'react';
// eslint-disable-next-line import/no-named-as-default
import Builder from '../../components/Builder/Builder';
// eslint-disable-next-line import/no-named-as-default
import IceCream from '../../components/IceCream/IceCream';
import classes from './IceCreamBuilder.module.css';

// eslint-disable-next-line react/prefer-stateless-function
export default class IceCreamBuilder extends Component {
    render() {
        return (
            <div className={['container', classes.container].join(' ')}>
                <IceCream />
                <Builder />
            </div>
        );
    }
}
