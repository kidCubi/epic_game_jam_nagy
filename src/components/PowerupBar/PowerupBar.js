import React, { Component } from 'react';
import styles from './PowerupBar.module.scss';
import classNames from 'classnames';

import { connect } from 'react-redux';
//import a redux mutator
//import { setAgendaLoaded } from '../../redux/actions/index'
import PowerupItemIncrementMultiplier from './../PowerupItem/PowerupItemIncrementMultiplier/PowerupItemIncrementMultiplier'
import PowerupItemAutoIncrement from './../PowerupItem/PowerupItemAutoIncrement/PowerupItemAutoIncrement'


const mapState = state => ({
    app: state.app,
});

const mapActions = dispatch => ({
    //Set redux actions
    //setAgendaLoaded: (loaded) => dispatch(setAgendaLoaded(loaded))
});

class PowerupBar extends Component {
    constructor(parent) {
        super();
        this.state = {
            isVisible: false
        };
    }

    componentDidUpdate(prevProps) {
        if(prevProps.isTileHovered !== this.props.isTileHovered) {
            if(this.props.isTileHovered && !this.state.isVisible) {
                this.setState(state => ({
                    isVisible: true
                }));
            }
            if( !this.props.isTileHovered && this.state.isVisible) {
                this.setState(state => ({
                    isVisible: false
                }));
            }
        }
    }

    render() {
        const stylingClasses = classNames(
            styles.PowerupBar,
            {[styles.isVisible]: this.state.isVisible}
        );

        return (
            <div className={stylingClasses} onClick={this.incrementTile}>
                <PowerupItemIncrementMultiplier
                    modifyParent={this.props.increaseMultiplierValue}
                    totalPoints={this.props.totalPoints}
                    decreaseTotalPoints={this.props.decreaseTotalPoints}
                />
                <PowerupItemAutoIncrement
                    modifyParent={this.props.autoIncrement}
                    modifyParent2={this.props.decreaseAutoincrementDuration}
                    totalPoints={this.props.totalPoints}
                    decreaseTotalPoints={this.props.decreaseTotalPoints}
                />

            </div>
        );
    }
}

export default connect(mapState, mapActions)(PowerupBar);
