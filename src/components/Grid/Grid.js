import React, { Component } from 'react';
import styles from './Grid.module.scss';
import NumberTile from './../NumberTile/NumberTile'

import {uid} from './../../helpers';



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

        this.state = {
           items: [
               {tile: uid()}
           ]
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {

        let newElement = {tile: uid()};
        this.setState({
            items: [...this.state.items, newElement]
        });
        
    }


    render() {
        let items = this.state.items;

        return (
            <div className={styles.Grid}>
                <button onClick={this.handleClick}>Add more</button>
                {items.map((item, index) =>
                    <NumberTile
                        key={index}
                        gameSetTotalPoints={this.props.gameSetTotalPoints}
                        gameSetTotalSpeed={this.props.gameSetTotalSpeed}
                    />
                )}
            </div>
        );
    }
}

export default connect(mapState, mapActions)(Grid);
