import React, { Component } from 'react';
import { TweenLite } from 'gsap/TweenLite';
import {Circ, Linear} from 'gsap/EasePack';
import throttle from 'lodash.throttle';

import styles from './NumberTile.module.scss';
import PowerupBar from '../PowerupBar/PowerupBar'

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
            speedMultiplier: 1,
            totalPoints: 0,
            autoIncrementDuration: 1000,
            isTileHovered: false
        };


        this.widthPx = 1;
        this.heightPx = 1;

        this.gridRowsPlusOne = 17;
        this.gridColumnsPlusOne = 17;
        this.fontSize = 7;//vw


        this.rafId = null;
        this.canClick = true;

        this.incrementTileProgress = this.incrementTileProgress.bind(this);
        this.resetCount = this.resetCount.bind(this);
        this.addPoints = this.addPoints.bind(this);
        this.raf = this.raf.bind(this);
    }

    componentDidMount() {
        console.log(this)

        this.fontSize = this.props.fontSize;

        this.width = this.props.width;
        this.height = this.props.height;

        this.colStart = this.props.colStart;
        this.rowStart = this.props.rowStart;
        this.colSpan = this.props.colSpan;
        this.rowSpan = this.props.rowSpan;

        this.refWrapper.addEventListener('mouseenter', this.mouseEnter.bind(this));
        this.refWrapper.addEventListener('mouseleave', this.mouseLeave.bind(this));
        this.init();
    }

    init() {
        this.heightPx = window.innerHeight * this.height - 60;
        this.widthPx = window.innerWidth * this.width - 8 * 2;

        this.refWrapper.style.gridColumn = `${this.colStart} / span ${this.colSpan}`;
        this.refWrapper.style.gridRow = `${this.rowStart} / span ${this.rowSpan}`;
        this.refWrapper.style.fontSize = `${this.fontSize}vw`;
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

        let count = {val: this.state.progress};

        if(this.canClick) {
            TweenLite.to(count, 1.3, {
                val: "+=" + 100,
                ease: Linear.easeInOut,
                onUpdate: () => {
                    this.canClick = false;
                    this.setState(state => ({
                        progress: Math.ceil(count.val)
                    }));
                    this.refProgressBar.style.transform = `scaleX(${ count.val / 100 })`
                },
                onComplete: () => {
                    TweenLite.set(this.refProgressBar, { scaleX: 0 });
                    this.resetCount();
                    this.canClick = true;
                }
            });
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

        this.props.gameSetTotalPoints(this.state.multiplier);
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

    decreaseTotalPoints(cost) {
        let totalPoints = this.state.totalPoints;
        totalPoints += cost;
        this.setState(state => ({
            totalPoints: totalPoints
        }));
        this.props.gameSetTotalPoints(cost);
    }

    raf() {
        this.rafId = requestAnimationFrame(this.raf);
    }

    componentWillUnmount() {
        this.refWrapper.removeEventListener('mouseenter', this.mouseEnter);
        this.refWrapper.removeEventListener('mouseleave', this.mouseLeave);
    }

    splitField() {
        if(this.widthPx > this.heightPx) {
            this.updateWidth();

            this.nextFieldColStart = this.colStart + this.colSpan;
            this.nextFieldRowStart = this.rowStart;

        } else {
            this.updateHeight();
            this.nextFieldRowStart = this.rowStart + this.rowSpan;
            this.nextFieldColStart = this.colStart;
        }

        this.props.gridNewTile(
            this.width,
            this.height,
            this.nextFieldColStart,
            this.nextFieldRowStart,
            this.colSpan,
            this.rowSpan,
            this.fontSize
        );
    }

    updateWidth() {
        this.width /= 2;
        this.widthPx /= 2;
        this.colSpan /= 2;
        this.fontSize /= 1.2;

        this.refWrapper.style.gridColumn = `${this.colStart} / span ${this.colSpan}`;
        this.refWrapper.style.fontSize = `${this.fontSize}vw`;

    }

    updateHeight() {
        this.height /= 2;
        this.heightPx /= 2;
        this.rowSpan /= 2;

        this.refWrapper.style.gridRow = `${this.rowStart} / span ${this.rowSpan}`;
    }


    render() {
        return (
            <div className={styles.Container} ref={node => this.refWrapper = node} >

                <div className={styles.Wrapper} onClick={throttle(this.incrementTileProgress, 5000, {trailing: true})}>
                    <span className={styles.ProgressValue}>
                        {this.state.progress}
                        <span className={styles.Percentage}>%</span>
                     </span>

                    <div className={styles.TopLeft}>
                        <span className={styles.Multiplier}>{this.state.totalPoints}</span>
                        <span className={styles.TotalPoints}>+{this.state.multiplier}</span>
                    </div>

                    {/* <div className={styles.TopRight}>
                     <div className={styles.SpeedMultiplier}>
                     Speed <span>x {
                     (this.state.autoIncrementDuration / (this.state.autoIncrementDuration * 0.99)).toFixed(1)
                     }</span>

                     </div>
                     </div> */}
                </div>


                <div className={styles.ProgressBar} ref={node => this.refProgressBar = node}></div>
                <PowerupBar
                    increaseMultiplierValue={this.increaseMultiplierValue.bind(this)}
                    decreaseAutoincrementDuration={this.decreaseAutoincrementDuration.bind(this)}
                    autoIncrement={this.autoIncrement.bind(this)}
                    decreaseTotalPoints={this.decreaseTotalPoints.bind(this)}
                    splitTriggeringField={this.splitField.bind(this)}
                    totalPoints={this.state.totalPoints}
                    isTileHovered={this.state.isTileHovered}
                />
            </div>
        );
    }
}

export default connect(mapState, mapActions)(NumberTile);
