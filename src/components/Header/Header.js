import React, { Component } from 'react';
import styles from './Header.module.scss';

import {dialogueMilestones} from './../../dialogueMilestones';
import {uid} from './../../helpers';

import DialogBox from './../DialogBox/DialogBox';

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

class Header extends Component {
    constructor() {
        super();

        this.state = {
            dialogBoxes: [
            ]
        };

        this.newDialogBox = this.newDialogBox.bind(this);
    }

    newDialogBox(data) {
        let x = window.innerWidth / 2;
        let y = window.innerHeight / 2;
        let newDialogBox = {id: uid(), data: data, x: x, y: y};
        this.setState({
            dialogBoxes: [...this.state.dialogBoxes, newDialogBox]
        });
    }

    componentDidUpdate(prevProps) {
        if(prevProps !== this.props.gameTotalPoints) {

            //TODO : Use redux, and don't put the dialog components in the header !!!!
            dialogueMilestones.forEach((value, index) => {
                if(!value.hasBeenClosed) {
                    if(this.props.gameTotalPoints >= value.milestone) {
                        this.newDialogBox(value);
                        value.hasBeenClosed = true;
                    }
                }

            });

        }
    }

    render() {
        return (
            <div className={styles.Header}>
                <div className={styles.InfoWrapper}>
                    <span className={styles.Info}>{this.props.gameTotalPoints}</span>
                    <span className={styles.InfoCaption}>pts</span>
                </div>
                <div className={styles.InfoWrapper}>
                    <span className={styles.Info}>{this.props.gameTotalSpeed}</span>
                    <span className={styles.InfoCaption}>/ sec</span>
                </div>

                {this.state.dialogBoxes.map((item, index) =>
                    <DialogBox
                        gameSetTotalPoints={this.props.gameSetTotalPoints}
                        key={index}
                        x={item.y}
                        y={item.x}
                        totalPoints={this.props.gameTotalPoints}
                        imgUrl={item.data.img}
                        text={item.data.text}
                        choices={item.data.choices}
                    />
                )}

            </div>
        );
    }
}

export default connect(mapState, mapActions)(Header);
