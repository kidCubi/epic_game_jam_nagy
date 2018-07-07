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
            price: 100
        }));
        this.setState(state => ({
            triggerVisibility: 1
        }));
        this.setState(state => ({
            triggerActive: 2
        }));
        this.setState(state => ({
            caption: 'increment faster'
        }));
    }

    componentDidMount() {
        this.init();
    }


}

export default PowerupItemDecreaseAutoIncrementDuration;
