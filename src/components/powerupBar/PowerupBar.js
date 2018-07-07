import React, { Component } from 'react';
import styles from './PowerupBar.module.scss';

import { connect } from 'react-redux';
//import a redux mutator
//import { setAgendaLoaded } from '../../redux/actions/index'

const mapState = state => ({
    app: state.app,
});

const mapActions = dispatch => ({
    //Set redux actions
    //setAgendaLoaded: (loaded) => dispatch(setAgendaLoaded(loaded))
});

class PowerupBar extends Component {
    constructor() {
        super();
        this.state = {
            numberCount: 1
        };

        this.powerupList = [
            { incrementMultiplier : "fkfkfk" },
            { autoIncrement : "fkfkfk" },
            { divideField : "fkfkfk" }
        ];
        this.newPowerupIntroductionPoints = [
            { incrementMultiplier : 42 },
            { autoIncrement : 233 },
            { divideField : 1111 }
        ];


        this.showNewPowerup = this.showNewPowerup.bind(this);
        this.sellNewPowerup = this.sellNewPowerup.bind(this);
        this.activateNewPowerup = this.activateNewPowerup.bind(this);
    }

    componentDidMount() {
        console.log('PowerupBar')
    }

    activateNewPowerup() {
        should make
        let nextPowerup = this.powerupList
        let count = this.state.numberCount;
        count++;
        this.setState(state => ({
            numberCount: count
        }));
    }

    render() {
        return (
            <div className={styles.Wrapper} onClick={this.incrementTile}>
                <span>{this.state.numberCount}</span>
            </div>
        );
    }
}

export default connect(mapState, mapActions)(PowerupBar);
