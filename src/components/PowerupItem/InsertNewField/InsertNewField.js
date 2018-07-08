import React, {Component} from 'react';

import classNames from 'classnames';

import styles from './InsertNewField.module.scss'
import PowerupItem from './../PowerupItem.js'

class InsertNewField extends PowerupItem {

    constructor() {
        super();
    }

    init() {
        this.setState(state => ({
            type: 'InsertNewField'
        }));
        this.setState(state => ({
            price: 1
        }));
        this.setState(state => ({
            triggerVisibility: 1
        }));
        this.setState(state => ({
            caption: 'New mining field'
        }));
    }

    componentDidMount() {
        this.init();
    }

}

export default InsertNewField;
