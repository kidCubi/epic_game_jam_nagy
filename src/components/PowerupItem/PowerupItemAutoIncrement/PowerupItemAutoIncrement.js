import React, {Component} from 'react';
import classNames from 'classnames';
import styles from './PowerupItemAutoIncrement.module.scss'

import PowerupItem from './../PowerupItem.js'

class PowerupItemIncrementMultiplier extends PowerupItem {

    constructor() {
        super();
    }

    init() {
        this.setState(state => ({
            price: 200
        }));
        this.setState(state => ({
            triggerVisibility: 5
        }));
        this.setState(state => ({
            caption: 'auto increment'
        }));
    }

    componentDidMount() {
        this.init();
    }
}

export default PowerupItemIncrementMultiplier;
