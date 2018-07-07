import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './App.scss';

import NumberTile from './components/NumberTile/NumberTile'

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
    }

    //How to access props :
    //this.props.setDraggableWidgets(false);
    //Note that redux state = this.props


    render() {
        //If you want to add multiple classes to a component, it's always nice to store
        //theses in a classNames object, like so
        const classes = classNames(
            styles.Wrapper
        );
        //If you want to add only one, it's simple to do like so : className={styles.myClassName}
        return (
            //To define if a redux state has been loaded, we can watch it from the render function like so
            //<div>
            //    {this.state.stateLoaded &&
            //      <MyComponent>
            //   }
            <div className={classes}>
                <NumberTile/>
            </div>

        );
    }
}

export default connect(mapState, mapActions)(App);
