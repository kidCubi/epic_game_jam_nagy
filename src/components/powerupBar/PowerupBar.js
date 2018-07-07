import React, { Component } from 'react';
import styles from './PowerupBar.module.scss';
import classNames from 'classnames';

import { connect } from 'react-redux';
//import a redux mutator
//import { setAgendaLoaded } from '../../redux/actions/index'
import PowerupItemIncrementMultiplier from './../PowerupItem/PowerupItemIncrementMultiplier/PowerupItemIncrementMultiplier'
import PowerupItemAutoIncrement from './../PowerupItem/PowerupItemAutoIncrement/PowerupItemAutoIncrement'
import PowerupItemDecreaseAutoIncrementDuration from './../PowerupItem/PowerupItemDecreaseAutoIncrementDuration/PowerupItemDecreaseAutoIncrementDuration'


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

    componentDidMount() {
        console.log('PowerupBar')
    }

    componentDidUpdate(prevProps) {
        // if( prevProps.isTileHovered === true &&
        //     !this.state.isVisible
        // ) {
        //     this.makeActive();
        // }
        //
        // if( prevProps.isTileHovered === false &&
        //     this.state.isVisible
        // ) {
        //     this.makeInActive();
        // }
    }

    makeActive() {
        this.setState(state => ({
            isActive: true
        }));
    }

    makeInActive() {
        this.setState(state => ({
            isActive: false
        }));
    }


    render() {
        const stylingClasses = classNames(
            styles.PowerupBar,
            {[styles.isVisible]: this.state.isVisible}
        );

        return (
            <div className={stylingClasses} onClick={this.incrementTile}>
                <PowerupItemIncrementMultiplier
                    modifyParent={this.props.increaseMultiplierValue.bind(this)}
                    totalPoints={this.props.totalPoints}
                />
                <PowerupItemAutoIncrement
                    modifyParent={this.props.autoIncrement.bind(this)}
                    totalPoints={this.props.totalPoints}
                />
                <PowerupItemDecreaseAutoIncrementDuration
                    modifyParent={this.props.decreaseAutoincrementDuration.bind(this)}
                    totalPoints={this.props.totalPoints}
                />
            </div>
        );
    }
}

export default connect(mapState, mapActions)(PowerupBar);
