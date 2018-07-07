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
            numberCount: 1
        };

        this.incrementTile = this.incrementTile.bind(this);
    }

    componentDidMount() {
        console.log('NumberTile')
    }

    incrementTile() {
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

export default connect(mapState, mapActions)(NumberTile);
