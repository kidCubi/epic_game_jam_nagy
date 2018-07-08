import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './App.scss';

import Grid from './components/Grid/Grid'
import Header from './components/Header/Header'

import { connect } from 'react-redux';

const mapState = state => ({
    app: state.app,
});

const mapActions = dispatch => ({

});

class App extends Component {
    constructor() {
        super();
        this.state = {
            totalPoints: 0,
            totalSpeed: 0
        };
    }

    setTotalPoints(change) {
        let totalPoints = this.state.totalPoints;
        totalPoints += change;
        this.setState(state => ({
            totalPoints: totalPoints
        }));
    }


    setTotalSpeed(change) {
        let totalSpeed = this.state.totalSpeed;
        totalSpeed += change;
        this.setState(state => ({
            totalSpeed: totalSpeed
        }));
    }

    componentDidUpdate(prevProps) {
        //A place where we can tell that if a specific inner/outer state has really changed and do stuff accordingly
    }

    componentDidMount() {
        //Here, we can start to call event listeners or stuff like requestAnimationFrame
        document.addEventListener('keydown', (event) => {
            const keyName = event.key;
            if(keyName === "y") {
                //add component
            }
        });
    }

    //How to access props :
    //this.props.setDraggableWidgets(false);
    //Note that redux state = this.props


    render() {
        //If you want to add multiple classes to a component, it's always nice to store
        //theses in a classNames object, like so
        const classes = classNames(
            styles.Grid
        );
        //If you want to add only one, it's simple to do like so : className={styles.myClassName}
        return (
            <div>
                <Header
                    gameSetTotalPoints={this.setTotalPoints.bind(this)}
                    gameTotalPoints={this.state.totalPoints}
                    gameTotalSpeed={this.state.totalSpeed}
                />
                <Grid
                    gameSetTotalPoints={this.setTotalPoints.bind(this)}
                    gameSetTotalSpeed={this.setTotalSpeed.bind(this)}
                />
            </div>

        );
    }
}

export default connect(mapState, mapActions)(App);
