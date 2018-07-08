import React, {Component} from 'react';
import classNames from 'classnames';

import {randNum} from './../../helpers';

import styles from './DialogBox.module.scss'

class DialogBox extends Component {

    constructor() {
        super();

        this.state = {
            itemPrice: 0,
            choicesLoaded: false,
            renderChild: true,
            isVisible: false
        };

        this.choices = [];
        this.closeDialogBox = this.closeDialogBox.bind(this);
        this.decrementTotalPoints = this.decrementTotalPoints.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.choicesLoaded !== this.state.choicesLoaded) {
            setTimeout(() => {
                this.setState({
                    isVisible: true
                })
            }, 10);
        }
    }

    componentDidMount() {
        let x = this.props.x - randNum(20, 100 );
        let y = this.props.y - randNum(200, 300 );
        this.refDialogBox.style.left = `${x}px`;
        this.refDialogBox.style.top = `${y}px`;

        this.props.choices.forEach((choice, index) => {
            if(choice.price) {
                this.setState({
                    itemPrice: choice.price
                });
                this.choices.push(
                    <div className={styles.Choice}
                         key={index}
                         onClick={this.decrementTotalPoints}
                    >
                        <span>{choice.content}</span>
                        <span className={styles.Price}>{choice.price}</span>
                    </div>
                );
            } else {
                this.choices.push(
                    <div className={styles.Choice} key={index} onClick={this.closeDialogBox}>
                        <span>{choice.content}</span>
                    </div>
                )
            }
            this.setState({
                choicesLoaded: true
            });
        });
    }


    closeDialogBox() {
        this.refDialogBox.remove();
    }

    decrementTotalPoints() {
        this.props.gameSetTotalPoints(-1 * this.state.itemPrice);
        this.refDialogBox.remove();
    }

    render() {

        const classes = classNames(
            styles.Wrapper,
            { [styles.isVisible]: this.state.isVisible }
        );

        return(
            <div className={classes} ref={node => this.refDialogBox = node}>
                <div className={styles.DialogBoxTop}>
                    <div className={styles.Image}>
                        <img src={this.props.imgUrl} alt=""/>
                    </div>
                    <div className={styles.Content}>{this.props.text}</div>
                </div>
                {this.state.choicesLoaded &&
                <div className={styles.Choices}>
                    {this.choices}
                </div>
                }
            </div>
        )
    }
}

export default DialogBox;
