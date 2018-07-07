import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './App.scss';

import NumberTile from './components/NumberTile/NumberTile'
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
                <Header/>
                <div className={classes}>
                    <NumberTile/>
                    <NumberTile/>
                    <NumberTile/>
                </div>
            </div>

        );
    }
}

export default connect(mapState, mapActions)(App);
