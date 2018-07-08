import React, { Component } from 'react';
import styles from './Header.module.scss';



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

            </div>
        );
    }
}

export default connect(mapState, mapActions)(Header);
