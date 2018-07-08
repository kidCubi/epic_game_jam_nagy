import React, {Component} from 'react';

import classNames from 'classnames';

import styles from './PowerupItemDecreaseAutoIncrementDuration.module.scss'
import PowerupItem from './../PowerupItem.js'

class PowerupItemDecreaseAutoIncrementDuration extends PowerupItem {

    constructor() {
        super();
    }

    init() {
        this.setState(state => ({
            price: 55
        }));
        this.setState(state => ({
            triggerVisibility: 20
        }));
        this.setState(state => ({
            priceMultiplier: 2
        }));
        this.setState(state => ({
            caption: 'Speed +'
        }));
    }

    componentDidMount() {
        this.init();
    }
}

export default PowerupItemDecreaseAutoIncrementDuration;
