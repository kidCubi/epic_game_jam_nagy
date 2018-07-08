import React, {Component} from 'react';

import {randNum} from './../../helpers';

import styles from './DialogBox.module.scss'

class DialogBox extends Component {

    constructor() {
        super();

        this.state = {
            itemPrice: 0,
            choicesLoaded: false,
            renderChild: true
        };

        this.choices = [];
        this.closeDialogBox = this.closeDialogBox.bind(this);
        this.decrementTotalPoints = this.decrementTotalPoints.bind(this);
    }

    componentDidMount() {
        let x = this.props.x - (this.refDialogBox.getBoundingClientRect().width / 2) + randNum(100);
        let y = this.props.y - (this.refDialogBox.getBoundingClientRect().height / 2) + randNum(200);
        this.refDialogBox.style.transform = `translate(${x}px, ${y}px)`;

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
        return(
            <div className={styles.Wrapper} ref={node => this.refDialogBox = node}>
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
