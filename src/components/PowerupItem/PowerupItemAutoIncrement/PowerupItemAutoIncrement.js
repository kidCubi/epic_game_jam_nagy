import React, {Component} from 'react';
import classNames from 'classnames';
import styles from './PowerupItemAutoIncrement.module.scss'

import PowerupItem from './../PowerupItem.js'

class PowerupItemAutoIncrement extends PowerupItem {

    constructor() {
        super();
    }

    init() {
        this.setState(state => ({
            isChangingBehaviourAfterFirstClick: true
        }));
        this.setState(state => ({
            price: 20
        }));
        this.setState(state => ({
            triggerVisibility: 5
        }));
        this.setState(state => ({
            caption: 'Automation'
        }));
        this.setState(state => ({
            caption2: 'Speed it up'
        }));
    }

    componentDidMount() {
        this.init();
    }


}

export default PowerupItemAutoIncrement;
