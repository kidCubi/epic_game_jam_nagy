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

        this.state = {
            progress: 0,
            multiplier: 1,
            totalPoints: 0,
            autoIncrementDuration: 1000,
            isTileHovered: false
        };
    }






    render() {
        return (
            <div className={styles.Header}>
                <div className={styles.InfoWrapper}>
                    <span className={styles.Info}>555</span>
                    <span className={styles.InfoCaption}>points</span>
                </div>
                <div className={styles.InfoWrapper}>
                    <span className={styles.Info}>45</span>
                    <span className={styles.InfoCaption}>per second</span>
                </div>

            </div>
        );
    }
}

export default connect(mapState, mapActions)(Header);
