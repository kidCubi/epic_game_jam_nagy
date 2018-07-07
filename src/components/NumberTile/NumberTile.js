import React, { Component } from 'react';
import styles from './NumberTile.module.scss';

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
            multiplier: 3,
            totalPoints: 0
        };

        this.rafId = null;

        this.incrementTile = this.incrementTile.bind(this);
        this.resetCount = this.resetCount.bind(this);
        this.addPoints = this.addPoints.bind(this);
        this.raf = this.raf.bind(this);
    }

    componentDidMount() {

    }

    incrementTile() {
        let count = this.state.progress;
        count += 20;
        this.setState(state => ({
            progress: count
        }));
        if(this.state.progress >= 100) {
            this.resetCount()
        }
    }

    resetCount() {
        this.setState(state => ({
            progress: 0
        }));
        if(this.state.progress === 0) return;
        this.addPoints();
    }

    addPoints() {
        this.setState(state => ({
            totalPoints: this.state.totalPoints + this.state.multiplier
        }));
    }

    raf() {
        this.rafId = requestAnimationFrame(this.raf);
    }

    render() {
        return (
            <div className={styles.Wrapper} onClick={this.incrementTile}>
                <span>{this.state.progress}%</span>
                <span className={styles.Multiplier}>+{this.state.multiplier}</span>
                <span className={styles.TotalPoints}>{this.state.totalPoints}</span>
            </div>
        );
    }
}

export default connect(mapState, mapActions)(NumberTile);
