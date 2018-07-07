import React, { Component } from 'react';
import styles from './NumberTile.module.scss';

import ChildComponent from './../ChildComponent/ChildComponent'
import PowerupItem from './../PowerupItem/PowerupItem'

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

class NumberTile extends Component {
    constructor() {
        super();

        this.state = {
            progress: 0,
            multiplier: 1,
            totalPoints: 0,
            autoIncrementDuration: 1000
        };

        this.rafId = null;

        this.incrementTileProgress = this.incrementTileProgress.bind(this);
        this.resetCount = this.resetCount.bind(this);
        this.addPoints = this.addPoints.bind(this);
        this.raf = this.raf.bind(this);
    }

    componentDidMount() {

    }

    incrementTileProgress() {
        let count = this.state.progress;
        count += 20;
        this.setState(state => ({
            progress: count
        }));
        if(this.state.progress >= 100) {
            console.log('state progress is complete')
            this.resetCount()
        }
    }

    resetCount() {
        this.setState(state => ({
            progress: 0
        }));
        this.addPoints();
    }

    addPoints() {
        this.setState(state => ({
            totalPoints: this.state.totalPoints + this.state.multiplier
        }));
    }

    increaseMultiplierValue() {
        let count = this.state.multiplier;
        count ++;
        this.setState(state => ({
            multiplier: count
        }));
    }

    autoIncrement() {
        this.incrementTileProgress();
        setTimeout(() => {
            this.autoIncrement();
            console.log('timeout')
            console.log(this.state.autoIncrementDuration)
        }, this.state.autoIncrementDuration);
    }

    decreaseAutoincrementDuration() {
        let count = this.state.autoIncrementDuration;
        count -= 100;
        if(count <= 500) count = 500;
        this.setState(state => ({
            autoIncrementDuration: count
        }));
    }

    raf() {
        this.rafId = requestAnimationFrame(this.raf);
    }

    render() {
        return (
            <div className={styles.Wrapper} onClick={this.incrementTileProgress}>
                <span>{this.state.progress}%</span>
                <span className={styles.Multiplier}>+{this.state.multiplier}</span>
                <span className={styles.TotalPoints}>{this.state.totalPoints}</span>
                <ChildComponent
                    increaseMultiplierValue={this.increaseMultiplierValue.bind(this)}
                    autoIncrement={this.autoIncrement.bind(this)}
                />
                <PowerupItem
                    autoIncrement={this.autoIncrement.bind(this)}
                    totalPoints={this.state.totalPoints}
                />

            </div>
        );
    }
}

export default connect(mapState, mapActions)(NumberTile);

// <ChildComponent2
//     decreaseAutoincrementDuration={this.decreaseAutoincrementDuration.bind(this)}
// />
