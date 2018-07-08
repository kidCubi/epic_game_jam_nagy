import React, {Component} from 'react';

import classNames from 'classnames';

import styles from './PowerupItemIncrementMultiplier.module.scss'
import PowerupItem from './../PowerupItem.js'

class PowerupItemIncrementMultiplier extends PowerupItem {

    constructor() {
        super();
    }

    init() {
        this.setState(state => ({
            type: 'IncreaseMultiplier'
        }));
        this.setState(state => ({
            price: 5
        }));
        this.setState(state => ({
            triggerVisibility: 5
        }));
        this.setState(state => ({
            caption: 'Rewards +1.0'
        }));
    }

    componentDidMount() {
        this.init();
    }


}

export default PowerupItemIncrementMultiplier;
