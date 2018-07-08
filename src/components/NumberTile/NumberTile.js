import React, { Component } from 'react';
import { TweenLite, Circ } from 'gsap';
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
            isTileHovered: false,
            width: 100,
            height: 100,
            widthPx: 1,
            heightPx: 1
        };

        this.rafId = null;
        this.canClick = true;

        this.incrementTileProgress = this.incrementTileProgress.bind(this);
        this.resetCount = this.resetCount.bind(this);
        this.addPoints = this.addPoints.bind(this);
        this.raf = this.raf.bind(this);
    }

    componentDidMount() {
        this.refWrapper.addEventListener('mouseenter', this.mouseEnter.bind(this));
        this.refWrapper.addEventListener('mouseleave', this.mouseLeave.bind(this));
        this.init();
    }

    init() {
        let heightPx = window.innHeight - 60;
        let widthPx = window.innerWidth - 8 * 2;
        this.setState(state => ({
            widthPx: widthPx
        }));

        this.setState(state => ({
            heightPx: heightPx
        }));
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
            TweenLite.set(this.refProgressBar, {clearProps: "transformOrigin"});
            TweenLite.to(count, 1.3, {
                val: "+=" + 100,
                ease: Circ.easeOut,
                onUpdate: () => {
                    this.canClick = false;
                    this.setState(state => ({
                        progress: Math.ceil(count.val)
                    }));
                    this.refProgressBar.style.transform = `scaleX(${ count.val / 100 })`
                },
                onComplete: () => {
                    TweenLite.to(this.refProgressBar, 0.25, {
                        transformOrigin: "right",
                        scaleX: 0,
                        ease: Circ.easeOut
                    });
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

    updateWidth() {
        console.log('updating numberTile dimension');
        let width = this.state.width;
        width /= 2;
        this.setState(state => ({
            width: width
        }));
    }

    updateWidthPx() {
        console.log('updating numberTile dimension');
        let widthPx = this.state.widthPx;
        widthPx /= 2;
        this.setState(state => ({
            widthPx: widthPx
        }));
    }

    updateHeight() {
        console.log('updating numberTile dimension');
        let height = this.state.height;
        height /= 2;
        this.setState(state => ({
            height: height
        }));
    }

    updateHeightPx() {
        console.log('updating numberTile dimension');
        let heightPx = this.state.heightPx;
        heightPx /= 2;
        this.setState(state => ({
            heightPx: heightPx
        }));
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

                    <div className={styles.TopRight}>
                        <div className={styles.SpeedMultiplier}>
                            Speed <span>x {
                            (this.state.autoIncrementDuration / (this.state.autoIncrementDuration * 0.99)).toFixed(1)
                        }</span>

                        </div>
                    </div>
                </div>


                <div className={styles.ProgressBar} ref={node => this.refProgressBar = node}></div>
                <PowerupBar
                    increaseMultiplierValue={this.increaseMultiplierValue.bind(this)}
                    decreaseAutoincrementDuration={this.decreaseAutoincrementDuration.bind(this)}
                    autoIncrement={this.autoIncrement.bind(this)}
                    decreaseTotalPoints={this.decreaseTotalPoints.bind(this)}
                    widthPx={this.state.widthPx}
                    heightPx={this.state.heightPx}
                    updateNumerTileWidth={this.updateWidth.bind(this)}
                    updateNumerTileWidthPx={this.updateWidthPx.bind(this)}
                    updateNumerTileHeight={this.updateHeight.bind(this)}
                    updateNumerTileHeightPx={this.updateHeightPx.bind(this)}
                    totalPoints={this.state.totalPoints}
                    isTileHovered={this.state.isTileHovered}
                />
            </div>
        );
    }
}

export default connect(mapState, mapActions)(NumberTile);
