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
            price: 145
        }));
        this.setState(state => ({
            triggerVisibility: 55
        }));
        this.setState(state => ({
            caption: 'New mining field'
        }));
    }

    componentDidMount() {
        this.init();
    }

    checkFieldDimensions() {
        if(this.props.widthPx > this.props.heightPx) {
            this.props.updateNumerTileWidth();
            this.props.updateNumerTileWidthPx();

        } else {
            this.props.updateNumerTileHeight();
            this.props.updateNumerTileHeightPx();
        }
    }


}

export default InsertNewField;
