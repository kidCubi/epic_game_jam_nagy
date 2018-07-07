import React, { Component } from 'react';
import styles from './Grid.module.scss';
import NumberTile from './../NumberTile/NumberTile'



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

class Grid extends Component {
    constructor() {
        super();
    }


    render() {
        return (
            <div className={styles.Grid}>
                <NumberTile
                    gameSetTotalPoints={this.props.gameSetTotalPoints}
                    gameSetTotalSpeed={this.props.gameSetTotalSpeed}
                />
                <NumberTile
                    gameSetTotalPoints={this.props.gameSetTotalPoints}
                    gameSetTotalSpeed={this.props.gameSetTotalSpeed}
                />
                <NumberTile
                    gameSetTotalPoints={this.props.gameSetTotalPoints}
                    gameSetTotalSpeed={this.props.gameSetTotalSpeed}
                />
            </div>
        );
    }
}

export default connect(mapState, mapActions)(Grid);
