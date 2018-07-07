import React, { Component } from 'react';
import { TweenLite } from 'gsap';
import styles from './NumberTile.module.scss';

import PowerupItemIncrementMultiplier from './../PowerupItem/PowerupItemIncrementMultiplier/PowerupItemIncrementMultiplier'


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
            autoIncrementDuration: 1000,
            isTileHovered: false
        };

        this.rafId = null;

        this.incrementTileProgress = this.incrementTileProgress.bind(this);
        this.resetCount = this.resetCount.bind(this);
        this.addPoints = this.addPoints.bind(this);
        this.raf = this.raf.bind(this);
    }

    componentDidMount() {
        this.refWrapper.addEventListener('mouseenter', this.mouseEnter.bind(this));
        this.refWrapper.addEventListener('mouseout', this.mouseLeave.bind(this));
    }

    mouseEnter() {
        this.setState(state => ({
            isTileHovered: true
        }));
    }

    mouseLeave() {
        this.setState(state => ({
            isTileHovered: false
        }));
    }

    incrementTileProgress() {
        let count = this.state.progress;
        count += 20;
        this.setState(state => ({
            progress: count
        }));
        if(this.state.progress >= 100) {
            //Reset Progressbar scale
            TweenLite.to(this.refProgressBar, 0.3, {
                scaleX: 0
            });
            this.resetCount();
            console.log('reset count')
        } else {
            TweenLite.to(this.refProgressBar, 0.3, {
                scaleX: count / 100
            });
        }
        console.log(count / 100)
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

    componentWillUnmount() {
        this.refWrapper.removeEventListener('mouseenter', this.mouseEnter);
        this.refWrapper.removeEventListener('mouseout', this.mouseLeave);
    }

    render() {
        return (
            <div className={styles.Wrapper} ref={node => this.refWrapper = node} onClick={this.incrementTileProgress}>
                <div className={styles.Container}>
                    <span className={styles.ProgressValue}>{this.state.progress}%</span>
                    <span className={styles.Multiplier}>+{this.state.multiplier}</span>
                    <span className={styles.TotalPoints}>{this.state.totalPoints}</span>
                </div>
                <div className={styles.ProgressBar} ref={node => this.refProgressBar = node}></div>
                <PowerupItemIncrementMultiplier
                    increaseMultiplierValue={this.increaseMultiplierValue.bind(this)}
                    autoIncrement={this.autoIncrement.bind(this)}
                    totalPoints={this.state.totalPoints}
                />


            </div>
        );
    }
}

export default connect(mapState, mapActions)(NumberTile);

// <PowerupItemIncrementMultiplier2
//     decreaseAutoincrementDuration={this.decreaseAutoincrementDuration.bind(this)}
// // />
//
// <PowerupItem
//     autoIncrement={this.autoIncrement.bind(this)}
//     totalPoints={this.state.totalPoints}
// />
