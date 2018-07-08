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
               {
                   tile: uid(),
                   width: 100,
                   height: 100,
                   colStart: 1,
                   rowStart: 1,
                   colSpan: 16,
                   rowSpan: 16
               }

           ]
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(width, height, colStart, rowStart, colSpan, rowSpan) {

        // console.log(width)
        // console.log(height)

        let newElement = {
            tile: uid(),
            width: width,
            height: height,
            colStart : colStart,
            rowStart : rowStart,
            colSpan : colSpan,
            rowSpan : rowSpan
        }
        this.setState({
            items: [...this.state.items, newElement]
        });

        console.log(this.state)

    }


    render() {
        let items = this.state.items;

        return (
            <div className={styles.Grid}>
                {items.map((item, index) =>
                    <NumberTile
                        width={item.width}
                        height={item.height}
                        colStart={item.colStart}
                        rowStart={item.rowStart}
                        colSpan={item.colSpan}
                        rowSpan={item.rowSpan}
                        key={index}
                        gameSetTotalPoints={this.props.gameSetTotalPoints}
                        gameSetTotalSpeed={this.props.gameSetTotalSpeed}
                        gridNewTile={this.handleClick.bind(this)}
                    />
                )};
            </div>
        );
    }
}

export default connect(mapState, mapActions)(Grid);
