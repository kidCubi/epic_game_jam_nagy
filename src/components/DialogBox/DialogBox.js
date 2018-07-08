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
        this.dragBox = this.dragBox.bind(this);
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
                         onClick={this.decrementTotalPoints}>
                        <span>{choice.content}</span>
                        <span className={styles.Price}>{choice.price}</span>
                    </div>
                );
            } else if(choice.url1){
                let url = choice.url1 + window.href + choice.url2;
                this.choices.push(
                    <div className={styles.Choice}
                         key={index}
                         onClick={this.decrementTotalPointsAndChangeDialog}>
                        <span><a href={url} target="_blank">{choice.content}</a></span>
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

        this.dragBox();
    }

    closeDialogBox() {
        this.refDialogBox.remove();
    }

    decrementTotalPoints() {
        this.props.gameSetTotalPoints(-1 * this.state.itemPrice);
        this.refDialogBox.remove();
    }

    dragBox() {
        dragElement(this.refDialogBox);
        function dragElement(elmnt) {
            var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
            if (document.getElementById(elmnt.id + "header")) {
                /* if present, the header is where you move the DIV from:*/
                document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
            } else {
                /* otherwise, move the DIV from anywhere inside the DIV:*/
                elmnt.onmousedown = dragMouseDown;
            }

            function dragMouseDown(e) {
                e = e || window.event;
                e.preventDefault();
                // get the mouse cursor position at startup:
                pos3 = e.clientX;
                pos4 = e.clientY;
                document.onmouseup = closeDragElement;
                // call a function whenever the cursor moves:
                document.onmousemove = elementDrag;
                elmnt.style.zIndex += 100;
            }

            function elementDrag(e) {
                e = e || window.event;
                e.preventDefault();
                // calculate the new cursor position:
                pos1 = pos3 - e.clientX;
                pos2 = pos4 - e.clientY;
                pos3 = e.clientX;
                pos4 = e.clientY;
                // set the element's new position:
                elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
                elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
            }

            function closeDragElement() {
                /* stop moving when mouse button is released:*/
                document.onmouseup = null;
                document.onmousemove = null;
            }
        }
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
